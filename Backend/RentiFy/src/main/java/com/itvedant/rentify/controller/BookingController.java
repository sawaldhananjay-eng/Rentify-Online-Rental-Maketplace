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

import com.itvedant.rentify.entities.Booking;
import com.itvedant.rentify.services.BookingService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/bookings")
public class BookingController {
	
	@Autowired
	private BookingService service;
	
	@PostMapping("/add")
    public Booking saveUser(@Valid @RequestBody Booking booking) {
        return service.saveBooking(booking);
    }
	
    @GetMapping("/get/{id}")
    public Optional<Booking> getUserById(@PathVariable Long id) {
        return service.getBookingById(id);
    }
    
    @GetMapping("/user/{id}")
    public List<Booking> getUserBookings(@PathVariable Long id){
        return service.getUserBookings(id);
    }

    @GetMapping("/getall")
    public List<Booking> getAllUsers() {
        return service.getAllBookings();
    }


    @PutMapping("/put/{id}")
    public Booking updateUser(@PathVariable Long id, @RequestBody Booking booking) {
        booking.setId(id);
        return service.updateBooking(booking);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteUser(@PathVariable Long id) {
        service.deleteBooking(id);
        return "User Deleted Successfully";
    }
}
