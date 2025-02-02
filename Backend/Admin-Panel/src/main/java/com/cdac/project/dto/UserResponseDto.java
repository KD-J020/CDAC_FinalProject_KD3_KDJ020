package com.cdac.project.dto;

import com.cdac.project.entity.UserRole;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserResponseDto extends BaseDTO {

	private String firstName;
	
	private String lastName;
	
	private String email;
	
	private String password;
	
	private String phone;
	
	private UserRole role;
	
	private boolean isActive;
}
