package com.cdac.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.project.dto.ApiResponse;
import com.cdac.project.dto.OrderResponseDto;

import com.cdac.project.service.OrderService;

@RestController
@CrossOrigin( origins = "http://localhost:3000")
@RequestMapping("/home/History/Purchases")
public class OrderController {
	@Autowired
	private OrderService orderService;
	
	 @GetMapping("/user/{userId}")
	 public ResponseEntity<?> getOrdersByUserId(@PathVariable Long userId) {
		 try {
				List<OrderResponseDto> orders = orderService.getAllOrdersByCustomerId(userId);
				if(orders.isEmpty())
					return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse("No Order Found"));
				
				return ResponseEntity.ok(orders);
			} catch (RuntimeException e) {
				return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse(e.getMessage()));
			}
	 }
	
}