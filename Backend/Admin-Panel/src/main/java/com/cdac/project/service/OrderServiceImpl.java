package com.cdac.project.service;

import java.util.Base64;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.project.custom_exception.ResourceNotFoundException;
import com.cdac.project.dto.OrderResponseDto;
import com.cdac.project.entity.Product;
import com.cdac.project.entity.User;
import com.cdac.project.repository.OrderRepository;
import com.cdac.project.repository.ProductRepository;
import com.cdac.project.repository.UserRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class OrderServiceImpl implements OrderService{
	@Autowired
	private OrderRepository orderRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	 @Autowired
	 private ProductRepository productRepository;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Override
	public List<OrderResponseDto> getAllOrdersByCustomerId(Long customerId) {
		System.out.println("Fetching orders for user ID: " + customerId);  // Debug log
	    User user = userRepository.findById(customerId)
	            .orElseThrow(() -> new ResourceNotFoundException("Invalid Customer ID!"));

	    List<OrderResponseDto> orders = orderRepository.findAllByUserId(customerId)
	            .stream()
	            .map(order -> {
	                OrderResponseDto dto = modelMapper.map(order, OrderResponseDto.class);
	                            
	                Product product = productRepository.findById(order.getProduct().getId())
	                        .orElseThrow(() -> new ResourceNotFoundException("Product not found!"));

	                dto.setProductName(product.getTitle());
	                dto.setProduct_id(product.getId());
	                dto.setUser_id(customerId);
	            
	                dto.setProductImage(product.getImage() != null
	                        ? "data:image/jpeg;base64," + Base64.getEncoder().encodeToString(product.getImage())
	                        : "");

	                return dto;
	            })
	            .collect(Collectors.toList());

	    System.out.println("Orders found: " + orders.size()); // Debug log
	    return orders;
	}
}
