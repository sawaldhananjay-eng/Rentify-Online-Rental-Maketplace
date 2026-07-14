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

import com.itvedant.rentify.entities.Item;
import com.itvedant.rentify.services.ItemService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/items")
public class ItemController {
	@Autowired
	private ItemService service;
	
    @PostMapping("/add")
    public Item saveUser(@Valid @RequestBody Item item) {
        return service.saveItem(item);
    }

    @GetMapping("/get/{id}")
    public Optional<Item> getUserById(@PathVariable Long id) {
        return service.FindItemById(id);
    }
    
    @GetMapping("/owner/{id}")
    public List<Item> getOwnerItems(@PathVariable Long id){
        return service.getItemsByOwner(id);
    }
    
    @GetMapping("/getall")
    public List<Item> getAllUsers() {
        return service.getAllItems();
    }

    @PutMapping("/put/{id}")
    public Item updateUser(@PathVariable Long id, @RequestBody Item item) {
        item.setId(id);
        return service.updateItem(item);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteUser(@PathVariable Long id) {
        service.deleteItem(id);
        return "User Deleted Successfully";
    }
}
