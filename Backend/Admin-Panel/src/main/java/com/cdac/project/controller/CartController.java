package com.cdac.project.controller;
import java.net.ResponseCache;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.project.service.CartService;

@RestController
@RequestMapping("/cart")
public class CartController {

	@Autowired
	private CartService cartService;
	
	
	@GetMapping
	public ResponseEntity<?> getCartDetails(Long userId)
	{
		return ResponseEntity.status(HttpStatus.OK).body(cartService.getCartItem(userId));
	}
	@PostMapping("/{pId}/{uId}")
	public ResponseEntity<?> addToCart(@PathVariable Long pId,@PathVariable Long uId)
	{
		return ResponseEntity.status(HttpStatus.OK).body(cartService.addToCart(pId, uId));
	}
    @DeleteMapping("/{pId}/{uId}")
	public ResponseEntity<?> removeFromCart(@PathVariable Long pId,@PathVariable Long uId)
	{
		return ResponseEntity.status(HttpStatus.OK).body(cartService.removeProductFromCart(pId, uId));
	}
	
	
}
