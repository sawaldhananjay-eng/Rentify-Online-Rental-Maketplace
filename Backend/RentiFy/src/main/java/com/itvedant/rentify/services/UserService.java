package com.itvedant.rentify.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.itvedant.rentify.entities.User;
import com.itvedant.rentify.repositories.UserJpa;

@Service
public class UserService {
	@Autowired
	private UserJpa jpa;
	
	@Autowired
	private PasswordEncoder passEnco;
	
	public User saveUser(User user) {
	    return jpa.save(user);
	}
	
	public List<User> getAllUsers(){
		return jpa.findAll();
	}
	
	public Optional<User> getUserById(Long id){
		return jpa.findById(id);
	}
	
	public User updateUser(User user) {
		return jpa.save(user);
	}
	
	public void deleteUser(Long id) {
		jpa.deleteById(id);
	}
	
	public User register(User user) {

	    if(jpa.existsByEmail(user.getEmail())) {
	        throw new RuntimeException("Email Already Exists");
	    }

	    user.setPassword(passEnco.encode(user.getPassword()));

	    return jpa.save(user);
	}
	
	public User login(String email, String password) {

	    Optional<User> optional = jpa.findByEmail(email);

	    if(optional.isPresent()) {

	        User user = optional.get();

	        if(passEnco.matches(password, user.getPassword())) {
	            return user;
	        }
	    }

	    throw new RuntimeException("Invalid Email or Password");
	}
}
