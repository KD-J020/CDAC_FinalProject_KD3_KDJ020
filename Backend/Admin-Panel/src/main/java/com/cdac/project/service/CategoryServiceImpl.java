package com.cdac.project.service;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.project.custom_exception.ResourceNotFoundException;
import com.cdac.project.dto.ApiResponse;
import com.cdac.project.dto.CategoryDto;
import com.cdac.project.entity.Category;

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
    try {
        Category category = modelMapper.map(dto, Category.class);
        category.setActive(true);
        categoryRepository.save(category);
        return new ApiResponse("Category added: " + category.getId());
    } catch (Exception e) {
        e.printStackTrace();
        return new ApiResponse("Error adding category: " + e.getMessage());
    }
}

@Override
public List<CategoryDto> getAllCategory() {
    try {
        return categoryRepository.findAll().stream()
                .map(category -> modelMapper.map(category, CategoryDto.class))
                .collect(Collectors.toList());
    } catch (Exception e) {
        e.printStackTrace();
        return Collections.emptyList(); 
    }
}

@Override
public CategoryDto getCategoryById(Long id) {
    try {
        Category category = categoryRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Category not found with ID: " + id));
        return modelMapper.map(category, CategoryDto.class);
    } catch (Exception e) {
        e.printStackTrace();
        return null; 
    }
}

@Override
public ApiResponse updateCategory(Long id, CategoryDto dto) {
    try {
        Category category = categoryRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Invalid category ID, update failed!"));

        modelMapper.map(dto, category);
        category.setActive(true);
        categoryRepository.save(category);
        return new ApiResponse("Category updated successfully!");
    } catch (Exception e) {
        e.printStackTrace();
        return new ApiResponse("Error updating category: " + e.getMessage());
    }
}

@Override
public ApiResponse softDeleteCategory(Long id) {
    try {
        Category category = categoryRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Invalid category ID, soft delete failed!"));

        category.setActive(false); 
        categoryRepository.save(category);
        return new ApiResponse("Category soft deleted successfully!");
    } catch (Exception e) {
        e.printStackTrace();
        return new ApiResponse("Error in soft deleting category: " + e.getMessage());
    }
}

@Override
public List<CategoryDto> getActiveCategories() {
    try {
        List<Category> activeCategories = categoryRepository.findByIsActiveTrue();
   
        
        return activeCategories.stream()
                .map(category -> modelMapper.map(category, CategoryDto.class))
                .collect(Collectors.toList());
    } catch (Exception e) {
        e.printStackTrace();
        return Collections.emptyList(); 
    }
}


}