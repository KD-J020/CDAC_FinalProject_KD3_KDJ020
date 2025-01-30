package com.cdac.project.dto;

import java.util.List;

import com.cdac.project.entity.Product;

import jakarta.persistence.Column;
import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
public class CategoryDto extends BaseDTO{
	
	private String title;
	
	
	private String details;
	
	
	private boolean isActive;
	
	
	private Long product_id;
}
