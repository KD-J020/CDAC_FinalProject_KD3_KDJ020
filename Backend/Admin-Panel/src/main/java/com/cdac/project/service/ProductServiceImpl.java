
package com.cdac.project.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.project.custom_exception.ResourceNotFoundException;
import com.cdac.project.dto.ApiResponse;
import com.cdac.project.dto.ProductDto;
import com.cdac.project.entity.Category;
import com.cdac.project.entity.Product;
import com.cdac.project.repository.CategoryRepository;
import com.cdac.project.repository.ProductRepository;

import jakarta.transaction.Transactional;
@Service
@Transactional
public class ProductServiceImpl implements ProductService{

	@Autowired
	ProductRepository productRepository;
	@Autowired
	ModelMapper modelMapper;

	@Autowired
	CategoryRepository categoryRepository;

	
	@Override
	public ApiResponse addProduct(ProductDto pd) {
	    try {
	        // Check if categoryId is null before proceeding
	        if (pd.getCid() == null) {
	            throw new IllegalArgumentException("Category ID cannot be null.");
	        }

	        // Find category using categoryId (not product ID)
	        Category category = categoryRepository.findById(pd.getCid())
	                .orElseThrow(() -> new ResourceNotFoundException("Invalid category ID!"));

	        // Convert DTO to entity
	        Product productEntity = modelMapper.map(pd, Product.class);

	        // Associate product with category
	        category.addProduct(productEntity);
	        productEntity.setCategory(category); // Ensure bidirectional mapping

	        // Save product
	        productRepository.save(productEntity);

	        return new ApiResponse("Added new Product Successfully with id: " + productEntity.getId());
	    } catch (Exception e) {
	        e.printStackTrace();
	        return new ApiResponse("Something went wrong: " + e.getMessage());
	    }
	}

	@Override
	public List<ProductDto> getAllProduct() {

		return productRepository.findAll()
				.stream()
				.map(product->modelMapper.map(product, ProductDto.class))
				.collect(Collectors.toList());
	}
	@Override
	public ProductDto getProduct(Long id) {
		
		Product product=productRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Invalid Product Id"));
		return modelMapper.map(product, ProductDto.class);
	}

	public ApiResponse updateProductDetails(Long id,ProductDto pd) {
			Optional<Product> p=productRepository.findById(id);
			if(p!=null)
			{
				Product product=p.get();
				product.setTitle(pd.getTitle());
				product.setDescription(pd.getDescription());
				product.setImage(pd.getImage());
				product.setPrice(pd.getPrice());
				return new ApiResponse("Product updated Successfully");
			}
			return new ApiResponse("Invalid id");
	}
	@Override
	public ApiResponse deleteProductDetails(Long id) {
	
		Optional<Product> p=productRepository.findById(id);
		Category c=p.get().getCategory();
		p.get().setActive(false);
		c.removeProduct(p.get());
		return new ApiResponse("product deleted successfully");
	}
	@Override
	public List<ProductDto> getAllActiveProduct() {
		
	  return productRepository.findAllByIsActiveTrue()
			  .stream()
			  .map(product-> modelMapper.map(product, ProductDto.class))
			  .collect(Collectors.toList());
	}
	
		
	
}
