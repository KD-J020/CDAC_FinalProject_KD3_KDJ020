package com.cdac.project.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdac.project.entity.Order;

public interface OrderRepository extends JpaRepository<Order, Long>{
	
	List<Order> findAllByUserId(Long customerid);
}
