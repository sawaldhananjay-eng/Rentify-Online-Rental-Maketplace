package com.itvedant.rentify.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.itvedant.rentify.entities.Item;
import com.itvedant.rentify.repositories.ItemJpa;

@Service
public class ItemService {
	@Autowired
	private ItemJpa jpa;
	
	public Item saveItem(Item item) {
		return jpa.save(item);
	}
	
	public List<Item> getAllItems(){
		return jpa.findAll();
	}
	
	public Optional<Item> FindItemById(Long id){
		return jpa.findById(id);
	}
	
	public List<Item> getItemsByOwner(Long ownerId){
	    return jpa.findByOwnerId(ownerId);
	}
	
	public Item updateItem(Item item) {
		return jpa.save(item);
	}
	
	public void deleteItem(Long id) {
		jpa.deleteById(id);
	}
	
	
}
