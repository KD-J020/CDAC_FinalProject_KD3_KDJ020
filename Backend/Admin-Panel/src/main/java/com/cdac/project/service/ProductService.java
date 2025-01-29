package com.cdac.project.service;

import java.util.List;

import com.cdac.project.dto.ApiResponse;
import com.cdac.project.dto.ProductDto;

public interface ProductService {
	public ApiResponse addProduct(ProductDto pd);

	public List<ProductDto> getAllProduct();

	public ProductDto getProduct(Long id);

	public ApiResponse updateProductDetails(Long id,ProductDto pd);

	public ApiResponse deleteProductDetails(Long id);

	public List<ProductDto> getAllActiveProduct();
}
