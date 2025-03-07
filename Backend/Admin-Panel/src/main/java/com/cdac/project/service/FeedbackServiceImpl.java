package com.cdac.project.service;

import java.util.Base64;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.stereotype.Service;

import com.cdac.project.dto.ApiResponse;
import com.cdac.project.dto.FeedbackDto;
import com.cdac.project.entity.Feedback;
import com.cdac.project.entity.Product;
import com.cdac.project.entity.User;
import com.cdac.project.repository.FeedbackRepository;
import com.cdac.project.repository.ProductRepository;
import com.cdac.project.repository.UserRepository;

import jakarta.transaction.Transactional;
@Service
@Transactional
public class FeedbackServiceImpl implements FeedbackService {
@Autowired
private FeedbackRepository feedbackRepository;

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private ProductRepository productRepository;

@Autowired
ModelMapper mapper;
@Override
public ApiResponse addFeedback(long userId, long productId, FeedbackDto feedbackDto) {
    try {
    	
    	Optional<User> user = userRepository.findById(userId);
    	Optional<Product> product = productRepository.findById(productId);
    	
        Feedback feedback = mapper.map(feedbackDto, Feedback.class);
        feedback.setUser(user.get());
        feedback.setProduct(product.get());
        
        product.get().getFeedbacks().add(feedback);
        user.get().getFeedbacks().add(feedback);
        
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
	List<Object[]> results = feedbackRepository.findFeedbackWithProductDetails(user_id);

    return results.stream().map(obj -> {
        FeedbackDto dto = new FeedbackDto();
        dto.setId(((Number) obj[0]).longValue()); // Feedback ID
        dto.setTitle((String) obj[1]);
        dto.setComment((String) obj[2]);
        dto.setRating(((Number) obj[3]).intValue());
        dto.setProduct_id(((Number) obj[4]).longValue());
        dto.setProductName((String) obj[5]);
        
        byte[] imageBytes = (byte[]) obj[6];
        if (imageBytes != null) {
            dto.setProductImage(Base64.getEncoder().encodeToString(imageBytes));
        } else {
            dto.setProductImage(null); // Or set a default image URL
        }
        
        dto.setProductPrice(((Number) obj[7]).floatValue());
        dto.setOrderedDate(obj[8].toString());
        return dto;
    }).collect(Collectors.toList());
}

	

}
