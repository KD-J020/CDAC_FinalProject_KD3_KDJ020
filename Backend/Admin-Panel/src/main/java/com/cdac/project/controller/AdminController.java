package com.cdac.project.controller;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.project.entity.Admin;
import com.cdac.project.service.AdminService;
import com.cdac.project.service.UserTicketRaiseService;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/Admin")
public class AdminController {
	@Autowired
	private AdminService adminService;
	@Autowired
	UserTicketRaiseService userTicketService;
	
	@PatchMapping("/{id}")
	public ResponseEntity<?> putMethodName(@PathVariable Long id, @RequestBody Admin admin) {
		//TODO: process PUT request
		
		return ResponseEntity.status(HttpStatus.OK).body(adminService.updateAdmin(id,admin).getMessage());
		
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<?> getAdminDetails(@PathVariable Long id)
	{
		return ResponseEntity.status(HttpStatus.OK).body(adminService.getDetails(id));
	}
	@PatchMapping("/{executorId}/{ticketId}")
	public ResponseEntity<?> assignTicketToExecutor(@PathVariable Long executorId,@PathVariable Long ticketId)
	{
		return ResponseEntity.status(HttpStatus.OK).body(adminService.assignTicket(executorId,ticketId));
	}
	@PatchMapping("/closedticket/{id}")
	public ResponseEntity<?> closeTicket(@PathVariable Long id) {
		return ResponseEntity.status(HttpStatus.OK).body(userTicketService.closeTicketStutus(id).getMessage());
	}
}
