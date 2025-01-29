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
import com.cdac.project.entity.Product;
import com.cdac.project.repository.ProductRepository;

import jakarta.transaction.Transactional;
@Service
@Transactional
public class ProductServiceImpl implements ProductService{

	@Autowired
	ProductRepository productRepository;
	@Autowired
	ModelMapper modelMapper;


	@Override
	public ApiResponse addProduct(ProductDto pd) {
		 
		try {
		Product productEntity=modelMapper.map(pd, Product.class);
		Product p=productRepository.save(productEntity);
		return new ApiResponse("Added new Product Successfully with id: "+p.getId());
		}
		catch (Exception e) {
			return new ApiResponse("something went wrong "+ e.getMessage());
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
		if(p!=null)
		{
			p.get().setActive(false);
			return new ApiResponse("product deleted successfully");
		}
		return new ApiResponse("Invalid product Id");
	}
	@Override
	public List<ProductDto> getAllActiveProduct() {
		
	  return productRepository.findAllByIsActiveTrue()
			  .stream()
			  .map(product-> modelMapper.map(product, ProductDto.class))
			  .collect(Collectors.toList());
	}
	
		
	
}
