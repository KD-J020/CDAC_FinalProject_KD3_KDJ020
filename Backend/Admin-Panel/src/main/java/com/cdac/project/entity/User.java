package com.cdac.project.entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "user")

@ToString(callSuper = true,exclude = {"userAddress","products","cart","feedbacks"} )
public class User extends BaseEntity {

	@Column(name = "first_name")
	private String firstName;
	
	@Column(name = "last_name")
	private String lastName;
	
	@Column(name = "email")
	private String email;
	
	@Column(name = "password")
	private String password;
	
	@Column(name = "phone")
	private String phone;
	
	@Lob
	private byte[] image;
	
	@Enumerated(EnumType.STRING)
	private UserRole role;
	
	@Column(name = "is_Active")
	private boolean isActive;
	
	@OneToOne
	@JoinColumn(name = "address_id")
	@JsonIgnore
	private Address userAddress;
	
	@ManyToMany(mappedBy = "users")
	@JsonIgnore
	private List<Product> products;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "cart_id")
	@JsonIgnore
	private Cart cart;
	
	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
	@JsonIgnore
    private List<Feedback> feedbacks; 
	
	
}
