package net.volanto.task.persist.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import net.volanto.task.persist.entities.User;

public interface UserRepository extends JpaRepository<User,Integer> {

/*	@Query("select s from User")
	List<User> getUsersList();
*/	
}
