package com.cdac.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.project.dto.FeedbackDto;
import com.cdac.project.service.FeedbackService;

import io.swagger.v3.oas.models.responses.ApiResponse;

@RestController
@RequestMapping("/feedback")
public class FeedbackController {
	@Autowired
private FeedbackService fservice;
	
	@PostMapping("/{userId}/{productId}")
	public ResponseEntity<?>addFeedback(@PathVariable long userId,@PathVariable long productId, @RequestBody FeedbackDto feedbackDto){
		return ResponseEntity.status(HttpStatus.CREATED).body(fservice.addFeedback(userId,productId,feedbackDto));
	}
	@GetMapping
	public ResponseEntity<?>getAllFeedback(){
		System.out.println("getAll");
		List<FeedbackDto>feedback=fservice.getAllFeedback();
		if(feedback.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		}
		return ResponseEntity.ok(feedback);
		
		
	}
	
	@GetMapping("/feedback/{id}")
	public ResponseEntity<?> getFeedbackById(@PathVariable Long id) {
		try {
			FeedbackDto feedbackDto=fservice.getById(id);
			return ResponseEntity.ok(feedbackDto);
		}
		catch (RuntimeException e) {
			// TODO: handle exception
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse( ));		}
	}
	@GetMapping("/product/{product_id}")
	public ResponseEntity<?>getFeedbackByProductId(@PathVariable Long product_id){
		List<FeedbackDto>feedback=fservice.getByProductId(product_id);
		if(feedback.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NO_CONTENT).body("No feedback found");
			
		}
		return ResponseEntity.ok(feedback);
	}
	@GetMapping("/user/{user_id}")
	public ResponseEntity<?> getFeedbackByuserId(@PathVariable Long user_id) {
		List<FeedbackDto>feedback=fservice.getByUserId(user_id);
		if(feedback.isEmpty())
			return ResponseEntity.status(HttpStatus.NO_CONTENT).body("No feedback found ");
		else
			return ResponseEntity.ok(feedback);
			
	}
	
	
	
	
}
