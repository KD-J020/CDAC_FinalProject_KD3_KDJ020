package com.cdac.project.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@Table(name = "feedback")
@ToString(callSuper = true,exclude = {"user","product"} )
public class Feedback extends BaseEntity {

	@Column(name = "title")
	private String title;
	
	@Column(name = "comment")
	private String comment;
	
	@Column(name = "rating")
	private int rating;
	
	@ManyToOne
    @JoinColumn(name = "user_id")
	@JsonIgnore
    private User user;

    @ManyToOne
    @JoinColumn(name = "product_id")
    @JsonIgnore
    private Product product;
}
