package com.itvedant.rentify.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.itvedant.rentify.entities.Category;
import com.itvedant.rentify.repositories.CategoryJpa;

@Service
public class CategoryService {
	@Autowired
	private CategoryJpa jpa;
	
	public Category saveCategory(Category category) {
		return jpa.save(category);
	}
	
	public List<Category> getAllCategories(){
		return jpa.findAll();
	}
	
	public Optional<Category> getCategoryById(Long id){
		return jpa.findById(id);
	}
	
	public Category updateCategory(Category category) {
		return jpa.save(category);
	}
	
	public void deleteCategory(Long id) {
		jpa.deleteById(id);
	}
}
