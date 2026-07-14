package com.itvedant.rentify.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.itvedant.rentify.entities.User;

public interface UserJpa extends JpaRepository<User, Long>{
	Optional<User> findByEmail(String email);
	
	boolean existsByEmail(String email);
}
