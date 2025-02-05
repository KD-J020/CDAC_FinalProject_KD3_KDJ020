package com.cdac.project.dto;

import java.time.LocalDate;
import java.time.LocalDateTime;

import jakarta.persistence.MappedSuperclass;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class BaseDTO {
	
	public Long id;
	
	private LocalDate createdOn;
	
	private LocalDateTime updatedOn;
}
