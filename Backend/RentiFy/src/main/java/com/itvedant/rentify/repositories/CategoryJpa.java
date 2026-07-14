package com.itvedant.rentify.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.itvedant.rentify.entities.Category;

public interface CategoryJpa extends JpaRepository<Category, Long> {

}
