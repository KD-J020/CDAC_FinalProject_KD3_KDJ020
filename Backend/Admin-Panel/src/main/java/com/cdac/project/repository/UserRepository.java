package com.cdac.project.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cdac.project.entity.User;
import com.cdac.project.entity.UserRole;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

	List<User> findByRole(UserRole role);
	List<User> findByIsActiveTrueAndRole(UserRole role);
	List<User> findByIsActiveFalseAndRole(UserRole role);
}
