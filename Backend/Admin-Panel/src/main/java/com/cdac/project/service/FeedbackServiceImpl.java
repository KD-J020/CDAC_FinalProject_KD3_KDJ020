package com.cdac.project.service;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.stereotype.Service;

import com.cdac.project.dto.ApiResponse;
import com.cdac.project.dto.FeedbackDto;
import com.cdac.project.entity.Feedback;
import com.cdac.project.repository.FeedbackRepository;

import jakarta.transaction.Transactional;
@Service
@Transactional
public class FeedbackServiceImpl implements FeedbackService {
@Autowired
private FeedbackRepository feedbackRepository;
@Autowired
ModelMapper mapper;
@Override
public ApiResponse addFeedback(FeedbackDto feedbackDto) {
    try {
        Feedback feedback = mapper.map(feedbackDto, Feedback.class);
        feedbackRepository.save(feedback);
        return new ApiResponse("Feedback added: " + feedback.getId());
    } catch (Exception e) {
        e.printStackTrace();
        return new ApiResponse("Error adding feedback: " + e.getMessage());
    }
}

@Override
public List<FeedbackDto> getAllFeedback() {
    try {
        return feedbackRepository.findAll().stream()
            .map(feedback -> mapper.map(feedback, FeedbackDto.class))
            .collect(Collectors.toList());
    } catch (Exception e) {
        e.printStackTrace();
        return Collections.emptyList(); 
    }
}

@Override
public FeedbackDto getById(Long id) {
    try {
        Feedback feedback = feedbackRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Feedback not found with ID: " + id));
        return mapper.map(feedback, FeedbackDto.class);
    } catch (Exception e) {
        e.printStackTrace();
        return null;
    }
}

@Override
public List<FeedbackDto> getByProductId(Long pid) {
    try {
        return feedbackRepository.findByProductId(pid).stream()
            .map(feedback -> mapper.map(feedback, FeedbackDto.class))
            .collect(Collectors.toList());
    } catch (Exception e) {
        e.printStackTrace();
        return Collections.emptyList(); // 
    }
}

@Override
public List<FeedbackDto> getByUserId(Long user_id) {
    try {
        return feedbackRepository.findByUserId(user_id).stream()
            .map(feedback -> mapper.map(feedback, FeedbackDto.class))
            .collect(Collectors.toList());
    } catch (Exception e) {
        e.printStackTrace();
        return Collections.emptyList();
    }
}

	

}
