package net.volanto.task.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import net.volanto.task.persist.entities.User;
import net.volanto.task.services.UserService;

@Controller
@RequestMapping("/users")
public class UserController {
	
	
	@Autowired
	UserService userService;
	
	@RequestMapping(value = "/all", method = RequestMethod.GET)
	public @ResponseBody List<User> getList(){
		
		List<User> users = userService.getAllUsers();
		
		return users;
		
	}
	
	@RequestMapping(value = "/update", method = RequestMethod.POST)
	public @ResponseBody void updateUser(@RequestBody User user){
		
		userService.updateUser(user);
		
	}


}
