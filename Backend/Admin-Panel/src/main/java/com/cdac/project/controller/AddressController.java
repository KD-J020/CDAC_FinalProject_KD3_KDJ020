package com.cdac.project.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.project.dto.AddressDto;
import com.cdac.project.service.AddressService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/address")
public class AddressController {
	
	@Autowired
	private AddressService addressService;

	@PostMapping("/post/{userId}")
	public ResponseEntity<?> postAddress(@PathVariable long userId,@RequestBody AddressDto addressDto) {
		//TODO: process POST request
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(addressService.addAddress(userId,addressDto).getMessage());	
	}
	
	@DeleteMapping("/delete/{addressId}")
	public ResponseEntity<?> deleteAddress(@PathVariable long addressId) {
		
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(addressService.deleteAddress(addressId).getMessage());
	}
	
	
}
