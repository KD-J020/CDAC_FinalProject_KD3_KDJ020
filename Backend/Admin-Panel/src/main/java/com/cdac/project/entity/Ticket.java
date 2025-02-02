package com.cdac.project.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@Table(name = "ticket")
@ToString(callSuper = true,exclude = {"customer","executive","product"} )
public class Ticket extends BaseEntity {

	@Column(name = "subject")
	private String subject;
	
	@Column(name = "description")
	private String description;
	
	@Enumerated(EnumType.STRING)
	private TicketStatus status;
	@Column(name="answer")
	private String answer;
	
	@ManyToOne
	@JoinColumn(name = "customer_id")
	@JsonIgnore
	private User customer;
	
	@ManyToOne
	@JoinColumn(name = "executive_id")
	@JsonIgnore
	private User executive;
	
	@ManyToOne
	@JoinColumn(name = "product_id")
	@JsonIgnore
	private Product product;
	
	
	
	
	
}
