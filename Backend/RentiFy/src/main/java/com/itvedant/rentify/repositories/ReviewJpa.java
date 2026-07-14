package com.itvedant.rentify.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.itvedant.rentify.entities.Review;

public interface ReviewJpa extends JpaRepository<Review, Long>{
	List<Review> findByItemId(Long itemId);
}
