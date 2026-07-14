package com.itvedant.rentify.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.itvedant.rentify.entities.Item;
import com.itvedant.rentify.entities.Review;
import com.itvedant.rentify.entities.User;
import com.itvedant.rentify.repositories.ItemJpa;
import com.itvedant.rentify.repositories.ReviewJpa;
import com.itvedant.rentify.repositories.UserJpa;

@Service
public class ReviewService {
	@Autowired
	private ReviewJpa jpa;
	
	@Autowired
	private ItemJpa itemJpa;

	@Autowired
	private UserJpa userJpa;
	
	public Review saveReview(Review review) {

	    System.out.println("Review = " + review);

	    System.out.println("Item = " + review.getItem());
	    System.out.println("User = " + review.getUser());

	    System.out.println("Item Id = " +
	            (review.getItem() != null ? review.getItem().getId() : "NULL"));

	    System.out.println("User Id = " +
	            (review.getUser() != null ? review.getUser().getId() : "NULL"));

	    Item item = itemJpa.findById(review.getItem().getId())
	            .orElseThrow(() -> new RuntimeException("Item Not Found"));

	    User user = userJpa.findById(review.getUser().getId())
	            .orElseThrow(() -> new RuntimeException("User Not Found"));

	    review.setItem(item);
	    review.setUser(user);

	    return jpa.save(review);
	}
	   	
	    public List<Review> getAllReviews() {
	        return jpa.findAll();
	    }
	    
	    public Optional<Review> getReviewById(Long id) {
	        return jpa.findById(id);
	    }
	    
	    public Review updateReview(Review review) {
	        return jpa.save(review);
	    }
	    
	    public void deleteReview(Long id) {
	        jpa.deleteById(id);
	    }
}
