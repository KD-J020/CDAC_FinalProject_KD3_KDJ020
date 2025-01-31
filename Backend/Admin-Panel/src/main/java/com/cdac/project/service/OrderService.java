package com.cdac.project.service;

import java.util.List;

import com.cdac.project.dto.OrderResponseDto;


public interface OrderService {

	List<OrderResponseDto> getAllOrdersByCustomerId(Long customerId);
	
	
}