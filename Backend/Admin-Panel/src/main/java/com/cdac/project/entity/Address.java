package com.cdac.project.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString
@Table(name = "address")
public class Address extends BaseEntity {
	
		@Column(name="adr_line1",length=100)
		private String adrLine1;
	
		@Column(name="adr_line2",length=100)
		private String adrLine2;
		
		@Column(length=20)
		private String city;
		
		@Column(length=20)
		private String district;
		
		@Column(length=20)
		private String state;
		
		@Column(length=20)
		private String country;
		
		@Column(name = "zip_code")
		private String zipCode;
		
		@OneToOne
		@JoinColumn(name = "user_id")
		@JsonIgnore
		private User user;
}
