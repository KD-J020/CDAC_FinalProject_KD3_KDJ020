package com.cdac.project.controller;

import java.net.ResponseCache;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.project.dto.ProductDto;
import com.cdac.project.service.ProductService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/product")
public class ProductController {
	
	@Autowired
	private ProductService productService;
	
	@PostMapping
	public ResponseEntity<?> addProduct(@RequestBody ProductDto pd)
	{
		
		return ResponseEntity.status(HttpStatus.CREATED).body(productService.addProduct(pd));
	}
	
	@GetMapping
	public ResponseEntity<?> getProduct()
	{
	    List<ProductDto> list=productService.getAllProduct();
		return ResponseEntity.status(HttpStatus.OK).body(list);
	}
	@GetMapping("/{productId}")
	public ResponseEntity<?> getProductDetail(@PathVariable Long id)
	{
		ProductDto p=productService.getProduct(id);
		return ResponseEntity.status(HttpStatus.OK).body(p);
	}
	
	@PutMapping("/{pId}")
	public ResponseEntity<?> updateProduct(@PathVariable Long id, @RequestBody ProductDto pd)
	{
		return ResponseEntity.status(HttpStatus.CREATED).body(productService.updateProductDetails(id,pd));
	}
	@PatchMapping("/{pId}")
	public ResponseEntity<?> deleteProduct(@PathVariable("pId") Long pId)
	{
		return ResponseEntity.status(HttpStatus.OK).body(productService.deleteProductDetails(pId));
	}
	@GetMapping("/active")
	public ResponseEntity<?> getActiveProducts()
	{
		return ResponseEntity.status(HttpStatus.OK).body(productService.getAllActiveProduct());
	}
	
	

}
