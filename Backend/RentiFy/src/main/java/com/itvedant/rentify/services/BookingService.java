package com.itvedant.rentify.services;

import java.time.temporal.ChronoUnit;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.itvedant.rentify.entities.Booking;
import com.itvedant.rentify.entities.BookingStatus;
import com.itvedant.rentify.entities.Item;
import com.itvedant.rentify.repositories.BookingJpa;
import com.itvedant.rentify.repositories.ItemJpa;

@Service
public class BookingService {
	@Autowired
	private BookingJpa jpa;
	
	@Autowired
	private ItemJpa itemJpa;
	
	public Booking saveBooking(Booking booking) {

	    Item item = itemJpa.findById(booking.getItem().getId())
	            .orElseThrow(() -> new RuntimeException("Item Not Found"));

	    booking.setItem(item);

	    long days = ChronoUnit.DAYS.between(
	            booking.getStartDate(),
	            booking.getEndDate());

	    if (days <= 0) {
	        throw new RuntimeException("Invalid Booking Dates");
	    }

	    double total = days * item.getPricePerDay();

	    booking.setTotalAmount(total);

	    booking.setStatus(BookingStatus.PENDING);

	    return jpa.save(booking);
	}
	
	public List<Booking> getAllBookings(){
		return jpa.findAll();
	}
	
	public List<Booking> getUserBookings(Long userId){
	    return jpa.findByUserId(userId);
	}
	
	public Optional<Booking> getBookingById(Long id){
		return jpa.findById(id);
	}
	
	public Booking updateBooking(Booking booking) {
		return jpa.save(booking);
	}
	
	public void deleteBooking(Long id) {
		jpa.deleteById(id);
	}
}
