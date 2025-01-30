package com.cdac.project.dto;

import com.cdac.project.entity.TicketStatus;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString(callSuper = true)
public class UserTicketResponseDto extends BaseDTO {
	private String subject;
	
	
	private String description;
	private TicketStatus status;
	
	private Long user_id;
	private Long product_id;
	
}
