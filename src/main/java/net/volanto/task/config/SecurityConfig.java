package net.volanto.task.config;

import javax.sql.DataSource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.ldap.core.support.BaseLdapPathContextSource;
import org.springframework.ldap.core.support.LdapContextSource;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.ldap.authentication.ad.ActiveDirectoryLdapAuthenticationProvider;
import org.springframework.security.provisioning.JdbcUserDetailsManager;
import org.springframework.security.web.csrf.CsrfFilter;
import org.springframework.security.web.csrf.CsrfTokenRepository;
import org.springframework.security.web.csrf.HttpSessionCsrfTokenRepository;
import org.springframework.web.filter.CharacterEncodingFilter;



@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter{
	
	private static final Logger LOGGER = LoggerFactory.getLogger(SecurityConfig.class);
	
	@Autowired
	DataSource dataSource;
	
	
	@Autowired
	public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
		
		/*
		auth
        .jdbcAuthentication()
            .dataSource(dataSource)
            .usersByUsernameQuery(getUserQuery())
		*/
		
	/*	
		auth
        .jdbcAuthentication().dataSource(dataSource)
        .usersByUsernameQuery(getUserQuery())
        .authoritiesByUsernameQuery(getAuthoritiesQuery()).rolePrefix("ROLE_");
        
     */
		
		auth.userDetailsService(userDetailsManager());
	}
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		

		http
		.authorizeRequests().antMatchers("/modules/users/users").hasRole("Admin").
		 anyRequest().authenticated()
		.and()
		.formLogin().and()
		.httpBasic().and()
	     .addFilterAfter(new CsrfHeaderFilter(), CsrfFilter.class).csrf().csrfTokenRepository(csrfTokenRepository());
		
	}
	
	
	private CsrfTokenRepository csrfTokenRepository() {
		  HttpSessionCsrfTokenRepository repository = new HttpSessionCsrfTokenRepository();
		  repository.setHeaderName("X-XSRF-TOKEN");
		  return repository;
		}
	
	
    private String getUserQuery() {
        return "select login as username,password, enabled from users where login=?";
    }
	
    
    private String getAuthoritiesQuery() {
        return "SELECT  users.login as username, permissiondefinition.name as authority, permissiondefinition.name as role "
                + "FROM users, permissiondefinition "
                + "WHERE users.permissiondefinitionid = permissiondefinition.permissiondefinitionid "
                + "AND users.login = ? ";
    }

	
 
    @Override
    public void configure(WebSecurity web) throws Exception {
        web.ignoring().antMatchers("/resources/**", "/index.html", "/authorization/login.html",
                "/partials/**", "/template/**", "/", "/error/**");
    }
    
    
    @Bean
    public JdbcUserDetailsManager userDetailsManager() {
        JdbcUserDetailsManager manager = new JdbcUserDetailsManager();
        manager.setDataSource(dataSource);
        manager.setUsersByUsernameQuery(getUserQuery());
        manager.setAuthoritiesByUsernameQuery(getAuthoritiesQuery());
        manager.setRolePrefix("ROLE_");
        return manager;
    }
    
  

}
