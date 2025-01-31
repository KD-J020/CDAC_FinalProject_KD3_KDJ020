package com.cdac.project.entity;

import java.util.List;
import java.util.jar.Attributes.Name;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@Table(name = "product")
@ToString(callSuper = true,exclude = {"users","cart","feedbacks"} )
public class Product extends BaseEntity{

	@Column(name = "title")
	private String title;
	
	@Column(name = "description")
	private String description;
	
	@Column(name = "price")
	private float price;
	
	@Column(name = "is_active")
	private boolean isActive;
	
	@Lob
	private byte[] image;
	
	@ManyToMany
    @JoinTable(
        name = "user_product_interaction",  // Join table to manage the relationship
        joinColumns = @JoinColumn(name = "product_id"),
        inverseJoinColumns = @JoinColumn(name = "user_id")
    )
	@JsonIgnore
    private List<User> users;
	
	@ManyToOne
	@JoinColumn(name = "cart_id")
	@JsonIgnore
	private Cart cart;
	
	 @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, orphanRemoval = true)
	 @JsonIgnore  
	 private List<Feedback> feedbacks;
	
	 @ManyToOne
	 @JoinColumn(name = "category_id")
	 private Category category;
	 
}