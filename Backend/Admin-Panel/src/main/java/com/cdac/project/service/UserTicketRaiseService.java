package com.cdac.project.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.cdac.project.dto.ApiResponse;
import com.cdac.project.dto.UserTicketRaiseDto;
import com.cdac.project.dto.UserTicketResponseDto;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;

public interface UserTicketRaiseService {
	ApiResponse RaiseTicket(UserTicketRaiseDto tckRaiseDto);

	List<UserTicketResponseDto> getAllTicketByCustomerId(Long c_id);

	List<UserTicketResponseDto> getAllTicketByExecutiveId(Long e_id);

	UserTicketResponseDto getTicketDetails(@Min(1) @Max(100) Long tktId);

	ApiResponse updateTicket(Long tktId, UserTicketRaiseDto dto);

	ApiResponse deleteCategory(Long tktId);

	ApiResponse closeTicketStutus(Long id);
	
	List<UserTicketResponseDto> getAllTicketByProductId(Long p_id);

	List<UserTicketResponseDto> getAllTicket();

	List<UserTicketResponseDto> getNotAssignTicket();
	List<UserTicketResponseDto> getAssignTicket();
}
