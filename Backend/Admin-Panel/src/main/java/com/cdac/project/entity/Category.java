package com.cdac.project.entity;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString
@Table(name = "category")
public class Category extends BaseEntity{

	@Column(name = "title")
	private String title;
	
	@Column(name = "details")
	private String details;
	
	@Column(name = "is_active")
	private boolean isActive;
	
	@OneToMany(mappedBy = "category",cascade = CascadeType.ALL,orphanRemoval = true)
	private List<Product> products;
	
	public void addProduct(Product product) {
		this.products.add(product);
		product.setCategory(this);
	}

	public void removeProduct(Product product) {
		this.products.remove(product);
		product.setCategory(null);
	}
	
}
