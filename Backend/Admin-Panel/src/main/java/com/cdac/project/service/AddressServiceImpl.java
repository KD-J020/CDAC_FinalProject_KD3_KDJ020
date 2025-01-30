package com.cdac.project.service;

import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.project.dto.AddressDto;
import com.cdac.project.dto.ApiResponse;
import com.cdac.project.entity.Address;
import com.cdac.project.entity.User;
import com.cdac.project.repository.AddressRepository;
import com.cdac.project.repository.UserRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class AddressServiceImpl implements AddressService {

	@Autowired
	private AddressRepository addressRepository;
	
	@Autowired 
	private UserRepository userRepository;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Override
	public ApiResponse addAddress(long userId,AddressDto addressDto) {
		// TODO Auto-generated method stub
		Optional<User> user =  userRepository.findById(userId);
		if(user.isPresent()) {
			Address address = modelMapper.map(addressDto, Address.class);
			address.setUser(user.get());
			user.get().setUserAddress(address);
			addressRepository.save(address);
			return new ApiResponse("Address add added");
		}else {
			return new ApiResponse("User not present");
		}	
	}

	@Override
	public ApiResponse deleteAddress(long addressId) {
		// TODO Auto-generated method stub
		if(addressRepository.existsById(addressId)) {
			addressRepository.findById(addressId).get().getUser().setUserAddress(null);
			addressRepository.deleteById(addressId);
			return new ApiResponse("Address deleted");
		}
		return new ApiResponse("Address not found");
	}

}
