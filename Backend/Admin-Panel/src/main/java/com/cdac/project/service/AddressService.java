package com.cdac.project.service;

import com.cdac.project.dto.AddressDto;
import com.cdac.project.dto.ApiResponse;

public interface AddressService {

	ApiResponse addAddress(long userId,AddressDto addressDto);

	ApiResponse deleteAddress(long addressId);

}
