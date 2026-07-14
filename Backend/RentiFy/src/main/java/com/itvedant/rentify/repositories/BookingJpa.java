package com.itvedant.rentify.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.itvedant.rentify.entities.Booking;

public interface BookingJpa extends JpaRepository<Booking, Long>{
	List<Booking> findByUserId(Long userId);
}
