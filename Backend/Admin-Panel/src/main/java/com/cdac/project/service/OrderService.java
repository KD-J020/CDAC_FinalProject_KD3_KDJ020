package com.cdac.project.service;

import java.util.List;

import com.cdac.project.dto.orderRespDto;


public interface OrderService {

	List<orderRespDto> getAllOrdersByCustomerId(Long customerId);

	
	
	
	
}
