package com.cdac.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.project.dto.ApiResponse;
import com.cdac.project.dto.UserTicketRaiseDto;
import com.cdac.project.dto.UserTicketResponseDto;
import com.cdac.project.entity.User;
import com.cdac.project.repository.UserRepository;
import com.cdac.project.service.UserTicketRaiseService;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/ticket")
public class TicketController {
	@Autowired
	private UserTicketRaiseService ticketRaiseService;

	
	@PostMapping
	public ResponseEntity<?> raiseNewTicket(@RequestBody UserTicketRaiseDto tktDto){
		try {
			return ResponseEntity.status(HttpStatus.CREATED).body(ticketRaiseService.RaiseTicket(tktDto));
		} catch (RuntimeException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse(e.getMessage()));
		}
	}
	
	@GetMapping("/{tktId}")
	public ResponseEntity<?> getTicketDetails(@PathVariable @Min(1) @Max(100) Long tktId) {

		// invoke service layer method
		UserTicketResponseDto ticket = ticketRaiseService.getTicketDetails(tktId);
		return ResponseEntity.ok(ticket);

	}
	
	@GetMapping("/user")
	public ResponseEntity<?> getAllTicketByUserId(@RequestParam Long c_id) {
		try {
			List<UserTicketResponseDto> tickets = ticketRaiseService.getAllTicketByCustomerId(c_id);
			if(tickets.isEmpty())
				return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse("No Tickets Found"));
			
			return ResponseEntity.ok(tickets);
		} catch (RuntimeException e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse(e.getMessage()));
		}
	}
	
//	@GetMapping()
//	public ResponseEntity<?> getAllTicketByProductId(@RequestParam Long p_id) {
//		try {
//			List<UserTicketResponseDto> tickets = ticketRaiseService.getAllTicketByProductId(p_id);
//			if(tickets.isEmpty())
//				return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse("No Tickets Found"));
//			
//			return ResponseEntity.ok(tickets);
//		} catch (RuntimeException e) {
//			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse(e.getMessage()));
//		}
//	}
	
	@GetMapping("/executive")
	public ResponseEntity<?> getAllTicketByExecutiveId(@RequestParam Long e_id) {
		try {
			List<UserTicketResponseDto> tickets = ticketRaiseService.getAllTicketByExecutiveId(e_id);
			if(tickets.isEmpty())
				return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse("No Tickets Found"));
			
			return ResponseEntity.ok(tickets);
		} catch (RuntimeException e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse(e.getMessage()));
		}
	}
	
	
	
	@PutMapping("/{tktId}")
	public ResponseEntity<?> updateCategoryDetails(@PathVariable Long tktId, @RequestBody UserTicketRaiseDto ticket) {

		return ResponseEntity.ok(ticketRaiseService.updateTicket(tktId, ticket));

	}

	@DeleteMapping
	public ResponseEntity<?> deleteTicketDetails(@RequestParam() Long tktId) {

		return ResponseEntity.ok(ticketRaiseService.deleteCategory(tktId));
	}
	
	
	
	
	
	
	

}
