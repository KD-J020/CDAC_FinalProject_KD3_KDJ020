package com.cdac.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdac.project.entity.Admin;

public interface AdminRepository extends JpaRepository<Admin, Long> {

}
