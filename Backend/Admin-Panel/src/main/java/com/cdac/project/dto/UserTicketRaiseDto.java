package com.cdac.project.dto;

import com.cdac.project.entity.User;

import jakarta.validation.constraints.NotEmpty;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
public class UserTicketRaiseDto {
	private String subject;
	
	
	private String description;
	
	
	
	
	
	private Long user_id;
	private Long product_id;
}
