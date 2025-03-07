package com.cdac.project.repository;



import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cdac.project.entity.Cart;
@Repository
public interface CartRepository extends JpaRepository<Cart, Long>{

	Optional<Cart> findByUserId(Long userId);

}
