package com.cdac.project.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cdac.project.dto.FeedbackDto;
import com.cdac.project.entity.Feedback;
@Repository
public interface FeedbackRepository extends JpaRepository<Feedback, Long> {
	List<Feedback> findByProductId(Long productId);
	List<Feedback>findByUserId(Long userId);
}
