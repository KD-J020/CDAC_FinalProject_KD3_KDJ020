package com.cdac.project.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
@Getter
@Setter
@ToString
public class ProductDto extends BaseDTO {
	private String title;
	private  Long cid;
	private String description;
	private float price;
	private boolean isActive;
	private byte[] image;
	
}
