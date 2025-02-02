package com.cdac.project.service;

import java.util.List;

import com.cdac.project.dto.ApiResponse;
import com.cdac.project.dto.ProductDto;
import com.cdac.project.entity.Cart;
import com.cdac.project.entity.User;

public interface CartService  {

	public List<ProductDto> getCartItem(Long userId);
	public ApiResponse addToCart(Long productId,Long userId);
	public ApiResponse removeProductFromCart(Long pId,Long userId);
	public Cart createNewCart(User u);

}
