package com.cdac.project.dto;

import java.time.LocalDateTime;

import com.cdac.project.entity.Product;
import com.cdac.project.entity.User;

import jakarta.persistence.Column;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class orderRespDto extends BaseDTO {

	private Long user_id;

    private Long product_id; 

    private int quantity; 
     
    private double totalPrice; 

    private LocalDateTime orderDate = LocalDateTime.now(); 
}
