package com.cdac.project.dto;

import jakarta.persistence.Column;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FeedbackDto extends BaseDTO{
	
	private String title;
	

	private String comment;
	
	
	private int rating;
	private Long user_id;
	private Long product_id;
	
}
