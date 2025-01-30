package com.cdac.project.dto;

import java.time.LocalDateTime;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class OrderResponseDto extends BaseDTO {

	private Long user_id;

    private Long product_id; 

    private int quantity; 
     
    private double totalPrice; 

    private LocalDateTime orderDate = LocalDateTime.now(); 
}
