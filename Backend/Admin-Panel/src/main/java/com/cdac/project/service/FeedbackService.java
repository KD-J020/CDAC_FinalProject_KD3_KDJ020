package com.cdac.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.project.dto.ApiResponse;
import com.cdac.project.dto.FeedbackDto;

import jakarta.transaction.Transactional;

@Service
@Transactional
public interface FeedbackService {
@Autowired
public ApiResponse addFeedback(long userId, long productId, FeedbackDto feedbackDto);

public List<FeedbackDto> getAllFeedback();
public FeedbackDto getById(Long id);

public List<FeedbackDto> getByProductId(Long pid);

public List<FeedbackDto> getByUserId(Long user_id);

}
