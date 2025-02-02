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
import com.cdac.project.dto.UserDto;
import com.cdac.project.dto.UserResponseDto;
import com.cdac.project.service.UserService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/post")
	public ResponseEntity<?> postUser(@RequestBody UserDto user) {
		//TODO: process POST request
//		 userService.createUser(user);
		
		return ResponseEntity.status(HttpStatus.CREATED).body(userService.createUser(user).getMessage());
	}
	
	@GetMapping
	public ResponseEntity<?> getAllUsers() {
		List<UserResponseDto> users = userService.getAllUsers();
		if(users.isEmpty())
			return ResponseEntity.ok(new ApiResponse("Users Not Found"));
		return ResponseEntity.ok(users);
	}
	
	@GetMapping("/{userId}")
	public ResponseEntity<?> getUserById(@PathVariable Long userId) {
		try {

			UserResponseDto user = userService.getUserById(userId);
			return ResponseEntity.ok(user);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND)
					.body(new ApiResponse(e.getMessage()));
		}
	}
	
	@PutMapping("/{userId}")
	public ResponseEntity<?> updateUser(@PathVariable Long userId, @RequestBody UserDto userDto){
		
		return ResponseEntity.ok(userService.updateUser(userId, userDto));
		
	}
	
	@PatchMapping("/{userId}")
	public ResponseEntity<?> deleteUser(@PathVariable Long userId){
		
		return ResponseEntity.ok(userService.deleteUser(userId));
		
	}
	
	@GetMapping("/customers")
	public ResponseEntity<?> getAllCustomers() {
		List<UserResponseDto> customers = userService.getAllCustomers();
		if(customers.isEmpty())
			return ResponseEntity.ok(new ApiResponse("Customers Not Found"));
		return ResponseEntity.ok(customers);
	}
	
	@GetMapping("/executive")
	public ResponseEntity<?> getAllExecutive() {
		List<UserResponseDto> executive = userService.getAllExecutive();
		if(executive.isEmpty())
			return ResponseEntity.ok(new ApiResponse("Executive Not Found"));
		return ResponseEntity.ok(executive);
	}
	
	@GetMapping("/active/customers")
	public ResponseEntity<?> getAllActiveCustomers() {
		List<UserResponseDto> customers = userService.getAllActiveCustomers();
		if(customers.isEmpty())
			return ResponseEntity.ok(new ApiResponse("Customers Not Found"));
		return ResponseEntity.ok(customers);
	}
	
	@GetMapping("/inactive/customers")
	public ResponseEntity<?> getAllInActiveCustomers() {
		List<UserResponseDto> customers = userService.getAllInActiveCustomers();
		if(customers.isEmpty())
			return ResponseEntity.ok(new ApiResponse("Not Any Inactive Customer"));;
		return ResponseEntity.ok(customers);
	}
	
	@GetMapping("/active/executive")
	public ResponseEntity<?> getAllActiveExecutive() {
		List<UserResponseDto> executives = userService.getAllActiveExecutive();
		if(executives.isEmpty())
			return ResponseEntity.ok(new ApiResponse("Executives Not Found"));
		return ResponseEntity.ok(executives);
	}
	
	@GetMapping("/inactive/executive")
	public ResponseEntity<?> getAllInActiveExecutive() {
		List<UserResponseDto> executives = userService.getAllInActiveExecutive();
		if(executives.isEmpty())
			return ResponseEntity.ok(new ApiResponse("Not Any Inactive Executive"));
		return ResponseEntity.ok(executives);
	}
	
	@PatchMapping("/answer/{ticketId}")
	public ResponseEntity<?> giveAnswerToTicket(@PathVariable Long id, @RequestBody String answer)
	{
		return ResponseEntity.status(HttpStatus.OK).body(userService.ticketAnswer(id,answer).getMessage());
	}
}
