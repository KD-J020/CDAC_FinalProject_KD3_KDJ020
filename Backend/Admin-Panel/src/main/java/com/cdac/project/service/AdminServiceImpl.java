package com.cdac.project.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.project.custom_exception.ResourceNotFoundException;
import com.cdac.project.dto.ApiResponse;
import com.cdac.project.entity.Admin;
import com.cdac.project.entity.Ticket;
import com.cdac.project.entity.TicketStatus;
import com.cdac.project.entity.User;
import com.cdac.project.entity.UserRole;
import com.cdac.project.repository.AdminRepository;
import com.cdac.project.repository.TicketRepository;
import com.cdac.project.repository.UserRepository;

import jakarta.transaction.Transactional;
@Service
@Transactional
public class AdminServiceImpl implements AdminService {

	@Autowired
	private AdminRepository adminRepository;
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private TicketRepository ticketRepository;
	@Override
	public Admin getDetails(Long id) {
		
		Admin admin=adminRepository.findById(id)
				   .orElseThrow(()-> new ResourceNotFoundException("Admin does not exist"));
		return admin;
	}
	@Override
	public ApiResponse assignTicket(Long executorId,Long ticketId) {
		 User executor=userRepository.findById(executorId).orElseThrow(()-> new ResourceNotFoundException("Executor not present"));
		 Ticket ticket=ticketRepository.findById(ticketId).orElseThrow(()-> new ResourceNotFoundException("Ticket not present"));
		 if(!executor.isActive() || executor.getRole()!=UserRole.EXECUTIVE)
		 {
			 return new ApiResponse("Executor not Active");
		 }else {
		 ticket.setExecutive(executor);
		 ticket.setStatus(TicketStatus.INPROGRESS);
		  ticketRepository.save(ticket);
		  return new ApiResponse("Ticket Assign to execuore Id "+ executorId);
		 }
		
	}

}
