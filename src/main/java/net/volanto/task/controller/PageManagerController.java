package net.volanto.task.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import net.volanto.task.services.UserService;

@Controller
public class PageManagerController {
	

	@RequestMapping(value="/authorization/login",method=RequestMethod.GET)
	public String getLoginPage(){
		

		
		return "authorization/login";
		
	}
	
	@RequestMapping(value="/dashboard/dashboard", method=RequestMethod.GET)
	public String getDashboardPage(){
		
		return "dashboard/dashboard";
		
	}
	
	@RequestMapping(value="/dashboard/header", method=RequestMethod.GET)
	public String getHeaderPage(){
		
		return "dashboard/header";
	}
	
	@RequestMapping(value="/modules/users/users", method=RequestMethod.GET)
	public String getUsersPage(){
		
		return "modules/users/users";
	}

	@RequestMapping(value="/common/dynamic-table-view", method=RequestMethod.GET)
	public String getDynamicTableViewPage(){
		
		return "common/dynamic-table-view";
	
	}

	@RequestMapping(value="/common/dynamic-record-view", method=RequestMethod.GET)
	public String getDynamicRecordViewPage(){
		
		return "common/dynamic-record-view";
	}
	
}
