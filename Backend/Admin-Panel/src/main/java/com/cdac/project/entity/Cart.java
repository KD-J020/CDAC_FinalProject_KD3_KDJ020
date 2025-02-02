package com.cdac.project.entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@Table(name = "cart")
@ToString(callSuper = true,exclude = {"user","likedProduct"} )
public class Cart extends BaseEntity {
	@OneToOne(mappedBy = "cart")
	private User user;
	
	@OneToMany(mappedBy = "cart", cascade = CascadeType.ALL)
	@JsonIgnore
	private List<Product> likedProduct;
	
	public void addProduct(Product p)
	{
		likedProduct.add(p);
		p.setCart(this);
	}
	public void removeProduct(Product p)
	{
		likedProduct.remove(p);
		p.setCart(null);
	}
	
}
