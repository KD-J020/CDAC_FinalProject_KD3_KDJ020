package com.cdac.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.project.dto.UserDto;
import com.cdac.project.service.UserService;

@RestController
@RequestMapping()
public class UserController {

	@Autowired
	private UserService userService;
	
	@PostMapping("/post")
	public String postUser(@RequestBody UserDto user) {
		//TODO: process POST request
		 userService.createUser(user);
		return "";
	}
	
	
}
