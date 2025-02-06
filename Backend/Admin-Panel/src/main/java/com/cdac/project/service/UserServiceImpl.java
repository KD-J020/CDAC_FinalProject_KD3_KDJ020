package com.cdac.project.service;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.cdac.project.custom_exception.ResourceNotFoundException;
import com.cdac.project.dto.ApiResponse;
import com.cdac.project.dto.UserDto;
import com.cdac.project.dto.UserResponseDto;
import com.cdac.project.entity.Cart;
import com.cdac.project.entity.Ticket;
import com.cdac.project.entity.User;
import com.cdac.project.entity.UserRole;
import com.cdac.project.repository.TicketRepository;
import com.cdac.project.repository.UserRepository;
import jakarta.transaction.Transactional;
@Service
@Transactional
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;
	
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Autowired
	private TicketRepository ticketRepository;
	
	@Override
	public ApiResponse createUser(UserDto userDto) {
		
		try {
             User userEntity = modelMapper.map(userDto, User.class);
             userEntity.setActive(true);
             Cart cart = new Cart();
             cart.setUser(userEntity); 
             userEntity.setCart(cart);
             User persistentUser = userRepository.save(userEntity);
            return new ApiResponse("New User Added with ID = " + persistentUser.getId());
        } catch (Exception e) {
            return new ApiResponse("Failed to create user. Please try again.");
        }
	}
	@Override
	public ApiResponse createExecutive(UserDto user) {
		 User userEntity = modelMapper.map(user, User.class);
		 userEntity.setRole(UserRole.EXECUTIVE);
		 userEntity.setActive(true);
		 User persistentUser=userRepository.save(userEntity);
		 return new ApiResponse("New Executive Added with ID = " + persistentUser.getId());
	}
	@Override
	public List<UserResponseDto> getAllUsers() {
		// TODO Auto-generated method stub
		return userRepository.findAll()
				.stream()
				.map(user -> modelMapper.map(user, UserResponseDto.class))
				.collect(Collectors.toList());
	}
	@Override
	public UserResponseDto getUserById(Long userId) {
		// TODO Auto-generated method stub
		User userEntity = userRepository.findById(userId)
				.orElseThrow(() ->
				new ResourceNotFoundException("Invalid user ID !!!!"));
		return modelMapper.map(userEntity, UserResponseDto.class);
	}
	@Override
	public ApiResponse updateUser(Long userId, UserDto userDto) {
		// TODO Auto-generated method stub
		
		Optional<User> existUser =  userRepository.findById(userId);
		User user = existUser.get();
		if(user != null) {
			user.setFirstName(userDto.getFirstName());
			user.setLastName(userDto.getLastName());
			user.setEmail(userDto.getEmail());
			user.setPassword(userDto.getPassword());
			user.setPhone(userDto.getPassword());
			user.setActive(true);
			
			return new ApiResponse("User Updated !");
		}
		return new ApiResponse("Invalid User Id !!!");
	}

	@Override
	public ApiResponse deleteUser(Long userId) {
		if(userRepository.existsById(userId)) {
			Optional<User> user = userRepository.findById(userId);
			if(user.get().isActive()==true) {
			user.get().setActive(false);
			}else {
				user.get().setActive(true);
			}
			userRepository.save(user.get());
			return new ApiResponse("User Deleted !");
		}
		return new ApiResponse("Invalid User Id !!!");
	}

	@Override
	public List<UserResponseDto> getAllCustomers() {
		// TODO Auto-generated method stub
		return userRepository.findByRole(UserRole.CUSTOMER)
				.stream()
				.map(user -> modelMapper.map(user, UserResponseDto.class))
				.collect(Collectors.toList());
	}

	@Override
	public List<UserResponseDto> getAllExecutive() {
		// TODO Auto-generated method stub
		return userRepository.findByRole(UserRole.EXECUTIVE)
				.stream()
				.map(user -> modelMapper.map(user, UserResponseDto.class))
				.collect(Collectors.toList());
	}

	@Override
	public List<UserResponseDto> getAllActiveCustomers() {
		// TODO Auto-generated method stub
		return userRepository.findByIsActiveTrueAndRole(UserRole.CUSTOMER)
				.stream()
				.map(user -> modelMapper.map(user, UserResponseDto.class))
				.collect(Collectors.toList());
	}

	@Override
	public List<UserResponseDto> getAllInActiveCustomers() {
		// TODO Auto-generated method stub
		return userRepository.findByIsActiveFalseAndRole(UserRole.CUSTOMER)
				.stream()
				.map(user -> modelMapper.map(user, UserResponseDto.class))
				.collect(Collectors.toList());
	}

	@Override
	public List<UserResponseDto> getAllActiveExecutive() {
		// TODO Auto-generated method stub
		return userRepository.findByIsActiveTrueAndRole(UserRole.EXECUTIVE)
				.stream()
				.map(user -> modelMapper.map(user, UserResponseDto.class))
				.collect(Collectors.toList());
	}

	@Override
	public List<UserResponseDto> getAllInActiveExecutive() {
		// TODO Auto-generated method stub
		return userRepository.findByIsActiveFalseAndRole(UserRole.EXECUTIVE)
				.stream()
				.map(user -> modelMapper.map(user, UserResponseDto.class))
				.collect(Collectors.toList());
	}

	@Override
	public ApiResponse ticketAnswer(Long id,String answer) {
		Ticket ticket=ticketRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Ticket not found"));
		ticket.setAnswer(answer);
		return new ApiResponse("Answer added successfully");
	}

	

}
