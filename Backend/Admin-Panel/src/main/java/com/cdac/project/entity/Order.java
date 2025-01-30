package com.cdac.project.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@Table(name = "orders")
@NoArgsConstructor
public class Order extends BaseEntity {
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "product_id", nullable = false)
    private Product product; 

    private int quantity; 
    
    @Column(name = "total_price")
    private double totalPrice; 

    @Column(nullable = false, updatable = false)
    private LocalDateTime orderDate = LocalDateTime.now();    
}