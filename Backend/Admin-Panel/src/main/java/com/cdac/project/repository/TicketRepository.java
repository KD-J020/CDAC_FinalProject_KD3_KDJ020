package com.cdac.project.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.cdac.project.entity.Ticket;


public interface TicketRepository extends JpaRepository<Ticket, Long> {
	@Query("select t from Ticket t where t.customer.id = :cid")
	List<Ticket> findAllByCustomerId(@Param("cid") Long c_id);
	
	List<Ticket> findAllByProductId(Long p_id);
	
	@Query("select t from Ticket t where t.executive.id = :eid")
	List<Ticket> findAllByExecutiveId(@Param("eid") Long e_id);
}
