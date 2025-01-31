package com.cdac.project.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.project.custom_exception.ResourceNotFoundException;
import com.cdac.project.dto.ApiResponse;
import com.cdac.project.dto.UserTicketRaiseDto;
import com.cdac.project.dto.UserTicketResponseDto;
import com.cdac.project.entity.Product;
import com.cdac.project.entity.Ticket;
import com.cdac.project.entity.TicketStatus;
import com.cdac.project.entity.User;
import com.cdac.project.repository.ProductRepository;
import com.cdac.project.repository.TicketRepository;
import com.cdac.project.repository.UserRepository;

import jakarta.transaction.Transactional;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;

@Service
@Transactional
public class UserTicketRaiseServiceImpl implements UserTicketRaiseService {
	@Autowired
	private TicketRepository tktRepository;
	
	@Autowired 
	private UserRepository userRepository;
	
	@Autowired
	private ProductRepository productRepository;
	
	@Autowired
	private ModelMapper modelMapper;

	@Override
	public ApiResponse RaiseTicket(UserTicketRaiseDto tckRaiseDto) {
		User user  = userRepository.findById(tckRaiseDto.getUser_id()).orElseThrow();
		Ticket tkt = modelMapper.map(tckRaiseDto, Ticket.class);
		tkt.setCustomer(user);
		tkt.setStatus(TicketStatus.PENDING);
		Ticket persistentTicket = tktRepository.save(tkt);
		
		
		return new ApiResponse("New Ticket Raised at id " + persistentTicket.getId());
	}

	@Override
	public List<UserTicketResponseDto> getAllTicketByCustomerId(Long c_id) {
		User user  = userRepository.findById(c_id).orElseThrow();
		if(user != null) {
			return 	tktRepository.findAllByCustomerId(c_id)
					.stream()
					.map(ticket -> modelMapper.map(ticket, UserTicketResponseDto.class))
					.collect(Collectors.toList());
		} else {
			throw new ResourceNotFoundException("Invalid Customer ID !!!!!!!!");
		}
	}

	@Override
	public List<UserTicketResponseDto> getAllTicketByProductId(Long p_id) {
		Product product  = productRepository.findById(p_id).orElseThrow();
		if(product != null) {
			return 	tktRepository.findAllByProductId(p_id)
					.stream()
					.map(ticket -> modelMapper.map(ticket, UserTicketResponseDto.class))
					.collect(Collectors.toList());
		} else {
			throw new ResourceNotFoundException("Invalid Product ID !!!!!!!!");
		}
	}
	
	@Override
	public List<UserTicketResponseDto> getAllTicketByExecutiveId(Long e_id) {
		User user  = userRepository.findById(e_id).orElseThrow();
		if(user != null) {
			return 	tktRepository.findAllByExecutiveId(e_id)
					.stream()
					.map(ticket -> modelMapper.map(ticket, UserTicketResponseDto.class))
					.collect(Collectors.toList());
		} else {
			throw new ResourceNotFoundException("Invalid Executive ID !!!!!!!!");
		}
	}

	@Override
	public UserTicketResponseDto getTicketDetails(Long tktId) {
		Ticket tktEntity = tktRepository.findById(tktId)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid Ticket ID!!!"));
		
		return modelMapper.map(tktEntity, UserTicketResponseDto.class);
	}
	
	
	@Override
	public ApiResponse updateTicket(Long tktId, UserTicketRaiseDto dto) {
		Ticket ticketEntity=tktRepository.findById(tktId)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid Ticket Id -update Failed!!!"));
		//apply the changes (like patch)
		modelMapper.map(dto, ticketEntity);
		tktRepository.save(ticketEntity);
		return new ApiResponse("Ticket updated !");
		

	}

	@Override
	public ApiResponse deleteCategory(Long tktId) {
		if (tktRepository.existsById(tktId)) {
			tktRepository.deleteById(tktId);
			return new ApiResponse("Deleted Ticket Details");
		}
		throw new ResourceNotFoundException("Invalid Ticket ID !!!!!!!!");
	}

	@Override
	public ApiResponse closeTicketStutus(Long id) {
		Optional<Ticket> ticket=tktRepository.findById(id);
		if(ticket.isPresent())
		{
			ticket.get().setStatus(TicketStatus.CLOSED);
			return new ApiResponse("Ticket Closed successfully");
		}
		
		return new ApiResponse("Ticket Not Found");
	}
	
	
	
}
