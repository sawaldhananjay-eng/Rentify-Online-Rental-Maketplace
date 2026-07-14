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

import com.itvedant.rentify.entities.Category;
import com.itvedant.rentify.services.CategoryService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/categories")
public class CategoryController {
	@Autowired
	private CategoryService service;
	
	@PostMapping("/add")
	public Category saveCategory(@Valid @RequestBody Category category) {
		return service.saveCategory(category);
	}
	
	@GetMapping("/get?{id}")
	public Optional<Category> getCategoryById(@PathVariable Long id){
		return service.getCategoryById(id);
	}
	
	@GetMapping("/getall")
	public List<Category> getAllCategories(){
		return service.getAllCategories();
	}
	
	@PutMapping("/put/{id}")
	public Category updateCategory(@PathVariable Long id,@RequestBody Category category) {
		category.setId(id);
		return service.updateCategory(category);
	}
	
	@DeleteMapping("/delete/{id}")
	public String deleteUser(@PathVariable Long id) {
		service.deleteCategory(id);
		return "Category Deleted Successfully";
	}
}
