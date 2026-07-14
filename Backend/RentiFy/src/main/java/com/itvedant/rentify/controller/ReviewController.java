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

import com.itvedant.rentify.entities.Review;
import com.itvedant.rentify.services.ReviewService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/reviews")
public class ReviewController {
	
	@Autowired 
	private ReviewService service;
	
	@PostMapping("/add")
	public Review saveReiew(@Valid @RequestBody Review review) {
		return service.saveReview(review);
	}
	
	@GetMapping("/get/{id}")
	public Optional<Review> getReviewById(@PathVariable Long id){
		return service.getReviewById(id);
	}
	
	@GetMapping("/getall")
	public List<Review> getAllReviews(){
		return service.getAllReviews();
	}
	
	@PutMapping("/put/{id}")
	public Review updateReview(@PathVariable Long id,@RequestBody Review review) {
		review.setId(id);
		return service.updateReview(review);
	}
	
	@DeleteMapping("/delete/{id}")
	public String deleteReview(@PathVariable Long id) {
		service.deleteReview(id);
		return "Review Deleted Successfully";
	}
	
}
