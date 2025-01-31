
package com.cdac.project.controller;

import java.net.ResponseCache;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.project.dto.CategoryDto;
import com.cdac.project.service.CategoryService;

import io.swagger.v3.oas.models.responses.ApiResponse;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;



@CrossOrigin(origins = "*")
@RestController
@RequestMapping
public class CategoryController {
@Autowired
private CategoryService categoryService;
@PostMapping("/Category/")
public ResponseEntity<?> addCategory(@RequestBody CategoryDto dto){
    //TODO: process POST request
    
    return ResponseEntity.status(HttpStatus.CREATED).body(categoryService.addCategory(dto));
}
@GetMapping("/category/")
public ResponseEntity<?> getCategory() {
    List<CategoryDto>list=categoryService.getAllCategory();
    if(list.isEmpty())
    	return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    else
    	return ResponseEntity.ok(list);
}
@GetMapping("/category/{id}")
public ResponseEntity<?>getCategoryById(@RequestParam Long id) {
    try {
    	CategoryDto categoryDto=categoryService.getCategoryById(id);
    	return ResponseEntity.ok(categoryDto);
    	
    }
    catch (Exception e) {
		// TODO: handle exception
    	return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse( ));
	}
}
@PutMapping("category/{id}")
public ResponseEntity<?> updateCategoryDetils(@PathVariable Long id, @RequestBody CategoryDto dto) {
    //TODO: process PUT request
    
    return ResponseEntity.ok(categoryService.updateCategory(id,dto));
}
@PatchMapping("/category/delete/{id}")
public ResponseEntity<?> softDeleteCategory(@PathVariable Long id) {
    // Directly return the result of the service method (soft delete message)
    return ResponseEntity.ok(categoryService.softDeleteCategory(id));
}
@GetMapping("/categories/active")
public ResponseEntity<List<CategoryDto>> getActiveCategories() {
    List<CategoryDto> activeCategories = categoryService.getActiveCategories();
    return ResponseEntity.ok(activeCategories);
}


}
