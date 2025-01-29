package com.cdac.project.repository;

import java.util.*;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdac.project.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {

	List<Product> findAllByIsActiveTrue();

}
