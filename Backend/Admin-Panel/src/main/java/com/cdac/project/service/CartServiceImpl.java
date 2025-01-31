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
import com.cdac.project.entity.Cart;
import com.cdac.project.entity.Product;
import com.cdac.project.entity.User;
import com.cdac.project.repository.CartRepository;
import com.cdac.project.repository.ProductRepository;
import com.cdac.project.repository.UserRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class CartServiceImpl implements CartService
{
	@Autowired
	ProductRepository productRepository;
	@Autowired
	CartRepository cartRepository;
	@Autowired
	UserRepository userRepository;
	@Autowired
	ModelMapper modelMapper;

	@Override
	public List<ProductDto> getCartItem(Long userId) {
		 Optional<Cart> c= cartRepository.findByUserId(userId);
		 List<ProductDto> l=c.get().getLikedProduct().stream().map(product-> modelMapper.map(product, ProductDto.class)).collect(Collectors.toList());
		 return l;
	}
	@Override
	public ApiResponse addToCart(Long productId,Long userId)
	{		
		User u=userRepository.findById(userId).orElseThrow(()-> new ResourceNotFoundException("User Not found"));
		Optional<Cart> c=cartRepository.findByUserId(userId);
	    Product p= productRepository.findById(productId).orElseThrow(()-> new ResourceNotFoundException("Product Not found"));
		c.get().addProduct(p);
		return new ApiResponse("Product Added Successfully");	
	}
	public ApiResponse removeProductFromCart(Long pId,Long userId)
	{
		Product p=productRepository.findById(pId).orElseThrow(()-> new ResourceNotFoundException("Product Not Found"));
		//User u=userRepository.findById(userId).orElseThrow(()-> new ResourceNotFoundException("User Not found"));
		Optional<Cart> c=cartRepository.findByUserId(userId);
		c.get().removeProduct(p);
		return new ApiResponse("Product Removed From cart");
	}
	
	@Override
	public Cart createNewCart(User u)
	{
	   Cart c=new Cart();
	   c.setUser(u);
	    Cart cart=cartRepository.save(c);
		return cart;
	}
	

}
