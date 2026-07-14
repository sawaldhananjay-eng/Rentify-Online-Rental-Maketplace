package com.itvedant.rentify.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.itvedant.rentify.entities.Item;

public interface ItemJpa extends JpaRepository<Item, Long>{
	List<Item> findByOwnerId(Long ownerId);
}
