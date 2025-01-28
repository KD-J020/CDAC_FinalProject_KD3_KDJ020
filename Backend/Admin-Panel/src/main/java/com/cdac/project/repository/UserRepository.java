package com.cdac.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cdac.project.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}
