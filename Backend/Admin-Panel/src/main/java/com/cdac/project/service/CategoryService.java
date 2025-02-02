package com.cdac.project.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.cdac.project.dto.ApiResponse;
import com.cdac.project.dto.CategoryDto;

import jakarta.transaction.Transactional;
@Service
@Transactional
public interface CategoryService {

	public ApiResponse addCategory(CategoryDto dto);

	public List<CategoryDto> getAllCategory();

	public CategoryDto getCategoryById(Long id);

	public ApiResponse updateCategory(Long id, CategoryDto dto);
	public ApiResponse softDeleteCategory(Long id);

	public List<CategoryDto> getActiveCategories();
}