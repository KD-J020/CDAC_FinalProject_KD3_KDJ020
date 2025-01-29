package com.cdac.custom_exception;

public class ApiException extends RuntimeException {
	public ApiException(String errMesg) {
		super(errMesg);
	}
}

