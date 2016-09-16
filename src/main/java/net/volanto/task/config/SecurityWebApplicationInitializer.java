package net.volanto.task.config;

import javax.servlet.FilterRegistration;
import javax.servlet.ServletContext;

import org.springframework.security.web.context.AbstractSecurityWebApplicationInitializer;
import org.springframework.web.filter.CharacterEncodingFilter;

public class SecurityWebApplicationInitializer extends  AbstractSecurityWebApplicationInitializer{
	
	public SecurityWebApplicationInitializer(){
		
		System.out.println("Init security............");
		
	}
	


}
