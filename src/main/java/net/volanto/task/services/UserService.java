package net.volanto.task.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import net.volanto.task.persist.entities.User;
import net.volanto.task.persist.repository.UserRepository;

@Service("userService")
public class UserService {
	
	@Autowired
	UserRepository userRepository;
	
	
	public List<User> getAllUsers(){
		
		return userRepository.findAll();
			
	}
	
	public void updateUser(User user){
		
		userRepository.save(user);
		
		
		
	}

}
