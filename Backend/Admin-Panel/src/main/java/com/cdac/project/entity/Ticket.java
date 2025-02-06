package com.cdac.project.entity;

import org.hibernate.validator.constraints.Length;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
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
	@Column(name="answer", length=500)
	
	private String answer;
	
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "customer_id")
	@JsonIgnore
	private User customer;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "executive_id")
	@JsonIgnore
	private User executive;
	
	@ManyToOne
	@JoinColumn(name = "product_id")
	@JsonIgnore
	private Product product;
	
	
	
	
	
}
