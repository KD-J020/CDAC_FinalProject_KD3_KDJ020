package com.cdac.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.project.service.AdminService;


@RestController
@RequestMapping("/Admin")
public class AdminController {
	@Autowired
	private AdminService adminService;
	@GetMapping("/{id}")
	public ResponseEntity<?> getAdminDetails(Long id)
	{
		return ResponseEntity.status(HttpStatus.OK).body(adminService.getDetails(id));
	}
	@GetMapping("/{eid}/{tid}")
	public ResponseEntity<?> assignTicketToExecutor(Long cid,Long tid)
	{
		return ResponseEntity.status(HttpStatus.OK).body(adminService.assignTicket(cid,tid));
	}
}
