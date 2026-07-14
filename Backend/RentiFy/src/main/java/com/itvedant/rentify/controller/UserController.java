package com.itvedant.rentify.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.itvedant.rentify.dto.LoginReq;
import com.itvedant.rentify.dto.LoginRes;
import com.itvedant.rentify.entities.User;
import com.itvedant.rentify.security.JwtUtil;
import com.itvedant.rentify.services.UserService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/users")
public class UserController {
	@Autowired 
	private UserService service;
	
	@Autowired
	private JwtUtil jwt;
	
	@PostMapping("/add")
	public User saveUser(@Valid @RequestBody User user) {
	    return service.saveUser(user);
	}
	
	@GetMapping("/get/{id}")
	public Optional<User>getUserById(@PathVariable Long id){
		return service.getUserById(id);
	}
	
	@GetMapping("/getall")
	public List<User>getAllUsers(){
		return service.getAllUsers();
	}
	
	@PutMapping("/put/{id}")
	public User updateUser(@PathVariable Long id,@RequestBody User user) {
		user.setId(id);
		return service.updateUser(user);
	}
	
	@DeleteMapping("/delete/{id}")
	public String deleteUser(@PathVariable Long id) {
		service.deleteUser(id);
		return "User Deleted Successfuly";
	}
	
	@PostMapping("/register")
	public User register(@Valid @RequestBody User user) {
	    return service.register(user);
	}
	
	@PostMapping("/login")
	public LoginRes login(@RequestBody LoginReq req) {

	    User user = service.login(req.getEmail(), req.getPassword());

	    String token = jwt.generateToken(
	            user.getEmail(),
	            user.getRole().name());

	    return new LoginRes(
	            token,
	            user.getRole().name(),
	            user.getId(),
	            user.getName());

	}
}
