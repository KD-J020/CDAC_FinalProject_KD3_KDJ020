package com.cdac.project.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cdac.project.entity.Feedback;
@Repository
public interface FeedbackRepository extends JpaRepository<Feedback, Long> {
	List<Feedback> findByProductId(Long productId);
	List<Feedback>findByUserId(Long userId);
	
	 @Query(value = """
		        SELECT f.id, f.title, f.comment, f.rating, 
		               p.id AS productId, p.title AS productName, p.image AS productImage, p.price AS productPrice,
		               o.order_date AS orderedDate
		        FROM feedback f
		        JOIN product p ON f.product_id = p.id
		        JOIN orders o ON f.user_id = o.user_id AND f.product_id = o.product_id
		        WHERE f.user_id = :userId
		    """, nativeQuery = true)
	 List<Object[]> findFeedbackWithProductDetails(@Param("userId") Long userId);
}
