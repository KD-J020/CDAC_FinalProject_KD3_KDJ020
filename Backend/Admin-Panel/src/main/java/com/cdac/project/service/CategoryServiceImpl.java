package com.cdac.project.service;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.project.dto.ApiResponse;
import com.cdac.project.dto.CategoryDto;
import com.cdac.project.entity.Category;
import com.cdac.project.entity.Feedback;
import com.cdac.project.repository.CategoryRepository;

import jakarta.transaction.Transactional;
@Service
@Transactional
public class CategoryServiceImpl implements CategoryService {
@Autowired
private CategoryRepository categoryRepository;
@Autowired
ModelMapper modelMapper;
	@Override
	public ApiResponse addCategory(CategoryDto dto) {
		// TODO Auto-generated method stub
		  try {
		        Category category = modelMapper.map(dto, Category.class);
		        categoryRepository.save(category);
		        return new ApiResponse("Feedback added: " + category.getId());
		    } catch (Exception e) {
		        e.printStackTrace();
		        return new ApiResponse("Error adding feedback: " + e.getMessage());
		    }
		
		
	
	}
	@Override
	public List<CategoryDto> getAllCategory() {
		// TODO Auto-generated method stub
		try {
		return categoryRepository.findAll().stream().map(category->modelMapper.map(category, CategoryDto.class)).collect(Collectors.toList());}
		catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			return Collections.emptyList();
		}
	}
	@Override
	public CategoryDto getCategoryById(Long id) {
	try {
		Category category=categoryRepository.findById(id).orElseThrow(() -> new RuntimeException("Category  not found with ID: " + id));
		return modelMapper.map(category, CategoryDto.class);
	}
	catch (Exception e) {
		 e.printStackTrace();
			return null;
	}
	
	}

}
