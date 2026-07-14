package com.itvedant.rentify.entities;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

@Entity
@Table(name = "items")
public class Item {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotBlank
	@Column(nullable = false)
	private String title;
	
	@NotBlank
	@Column(length = 1000)
	private String description;
	
	@NotNull
	@Positive
	@Column(nullable = false)
	private Double pricePerDay;
	
	@NotBlank
	@Column(nullable = false)
	private String location;
	
	private String imageUrl;
	
	@Column(nullable = false)
	private Boolean available = true;
	
	@ManyToOne
	@JoinColumn(name ="owner_id", nullable = false)
	private User owner;
	
	@ManyToOne
	@JoinColumn(name = "category_id", nullable = false)
	private Category category;
	
	@JsonIgnore
	@OneToMany(mappedBy = "item", cascade = CascadeType.ALL)
	private List<Booking> bookings;
	
	@JsonIgnore
	@OneToMany(mappedBy = "item", cascade = CascadeType.ALL)
	private List<Review> reviews;
	
	public Item() {
		
	}
	

	public Item(Long id, String title, String description, Double pricePerDay, String location, String imageUrl,
			Boolean available, User owner, Category category) {
		super();
		this.id = id;
		this.title = title;
		this.description = description;
		this.pricePerDay = pricePerDay;
		this.location = location;
		this.imageUrl = imageUrl;
		this.available = available;
		this.owner = owner;
		this.category = category;
	}



	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Double getPricePerDay() {
		return pricePerDay;
	}

	public void setPricePerDay(Double pricePerDay) {
		this.pricePerDay = pricePerDay;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	public Boolean getAvailable() {
		return available;
	}

	public void setAvailable(Boolean available) {
		this.available = available;
	}

	public User getOwner() {
		return owner;
	}

	public void setOwner(User owner) {
		this.owner = owner;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}


	public List<Booking> getBookings() {
		return bookings;
	}


	public void setBookings(List<Booking> bookings) {
		this.bookings = bookings;
	}


	public List<Review> getReviews() {
		return reviews;
	}


	public void setReviews(List<Review> reviews) {
		this.reviews = reviews;
	}
	
	
}
