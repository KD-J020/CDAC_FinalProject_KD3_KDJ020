package com.cdac.project.service;

import com.cdac.project.dto.ApiResponse;
import com.cdac.project.entity.Admin;

public interface AdminService {

	public Admin getDetails(Long id);

	public ApiResponse assignTicket(Long eid,Long tid);

}
