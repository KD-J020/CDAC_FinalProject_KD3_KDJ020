package com.cdac.project.service;

import java.util.List;

import com.cdac.project.dto.ApiResponse;
import com.cdac.project.dto.UserDto;
import com.cdac.project.dto.UserResponseDto;

public interface UserService {

	ApiResponse createUser(UserDto user);

	List<UserResponseDto> getAllUsers();

	UserResponseDto getUserById(Long userId);

	ApiResponse updateUser(Long userId, UserDto userDto);

	ApiResponse deleteUser(Long userId);

	List<UserResponseDto> getAllCustomers();

	List<UserResponseDto> getAllExecutive();

	List<UserResponseDto> getAllActiveCustomers();

	List<UserResponseDto> getAllInActiveCustomers();

	List<UserResponseDto> getAllActiveExecutive();

	List<UserResponseDto> getAllInActiveExecutive();

	ApiResponse ticketAnswer(Long id,String answer);


}
