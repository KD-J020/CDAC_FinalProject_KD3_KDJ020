package com.cdac.project.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.project.custom_exception.ResourceNotFoundException;
import com.cdac.project.dto.UserTicketResponseDto;
import com.cdac.project.dto.orderRespDto;
import com.cdac.project.entity.User;
import com.cdac.project.repository.OrderRepository;
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
	private ModelMapper modelMapper;
	
	@Override
	public List<orderRespDto> getAllOrdersByCustomerId(Long customerId) {
		User user  = userRepository.findById(customerId).orElseThrow();
		if(user != null) {
			return 	orderRepository.findAllByUserId(customerId)
					.stream()
					.map(order -> modelMapper.map(order, orderRespDto.class))
					.collect(Collectors.toList());
		} else {
			throw new ResourceNotFoundException("Invalid Customer ID !!!!!!!!");
		}
	}
}
