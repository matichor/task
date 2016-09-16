package net.volanto.task.persist.config;

import javax.sql.DataSource;

import org.apache.commons.dbcp.BasicDataSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.dao.annotation.PersistenceExceptionTranslationPostProcessor;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.JpaVendorAdapter;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.Database;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.PlatformTransactionManager;

@Configuration
@EnableJpaRepositories(basePackages="net.volanto.task.persist.repository")
public class JpaConfig {


	
	@Bean(name="dataSource")
	public BasicDataSource dataSource(){
		BasicDataSource bean = new BasicDataSource();
        bean.setDriverClassName("com.mysql.jdbc.Driver");
        bean.setUrl("jdbc:mysql://127.0.0.1:3306/task?useUnicode=true&amp;characterEncoding=utf8");
        bean.setUsername("root");
        bean.setPassword("aThahs7f");
		bean.setInitialSize(20);
		bean.setMaxActive(50);
        return bean;
	}
	

	
	@Bean(name="entityManagerFactory")
	public LocalContainerEntityManagerFactoryBean entityManagerFactoryBean(){
		
		LocalContainerEntityManagerFactoryBean lcemfb = new LocalContainerEntityManagerFactoryBean();
		lcemfb.setDataSource(dataSource());
		lcemfb.setJpaVendorAdapter(jpaVendorAdapter());
		lcemfb.setPackagesToScan("net.volanto.task.persist.entities");
		return lcemfb;
		
	}
	
	
	@Bean(name="jpaVendorAdapter")
	public JpaVendorAdapter jpaVendorAdapter(){
		
		HibernateJpaVendorAdapter hjpava = new HibernateJpaVendorAdapter();
		
		hjpava.setShowSql(false);
		hjpava.setGenerateDdl(true);
		hjpava.setDatabase(Database.MYSQL);
		hjpava.setDatabasePlatform("org.hibernate.dialect.MySQL5Dialect");
		
		return hjpava;
	}
	
	
	@Bean
    public PlatformTransactionManager transactionManager() {
        JpaTransactionManager transactionManager = new JpaTransactionManager();
        
        transactionManager.setEntityManagerFactory(entityManagerFactoryBean().getObject());
        return transactionManager;
    }

    @Bean
    public PersistenceExceptionTranslationPostProcessor exceptionTranslation() {
        return new PersistenceExceptionTranslationPostProcessor();
    }

	
}
