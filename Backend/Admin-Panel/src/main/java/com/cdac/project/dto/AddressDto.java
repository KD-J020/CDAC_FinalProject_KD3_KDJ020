package com.cdac.project.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AddressDto extends BaseDTO {
	
	private String adrLine1;

	private String adrLine2;
	
	private String city;
	
	private String district;
	
	private String state;
	
	private String country;
	
	private String zipCode;

}
