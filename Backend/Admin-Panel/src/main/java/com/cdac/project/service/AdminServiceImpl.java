package com.cdac.project.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.cdac.project.custom_exception.ResourceNotFoundException;
import com.cdac.project.dto.ApiResponse;
import com.cdac.project.entity.Admin;
import com.cdac.project.entity.User;
import com.cdac.project.repository.AdminRepository;
import com.cdac.project.repository.UserRepository;

public class AdminServiceImpl implements AdminService {

	@Autowired
	private AdminRepository adminRepository;
	@Autowired
	private UserRepository us;
	@Override
	public Admin getDetails(Long id) {
		
		Admin admin=adminRepository.findById(id)
				   .orElseThrow(()-> new ResourceNotFoundException("Admin does not exist"));
		return admin;
	}
	@Override
	public ApiResponse assignTicket(Long eid,Long tid) {
		 User executor=us.findById(eid).orElseThrow(()-> new ResourceNotFoundException("Executor not present"));
		 
		 
		
		return null;
	}

}
