package com.cdac.project.dto;

import java.util.Base64;

import com.cdac.project.entity.UserRole;

import jakarta.persistence.Column;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Lob;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserDto extends BaseDTO {

	private String firstName;
	
	private String lastName;
	
	private String email;
	
	private String password;
	private byte[] image;
	public void setImage(String base64Image) {
        this.image = Base64.getDecoder().decode(base64Image);
    }
	private String phone;
	
	private UserRole role;
}
