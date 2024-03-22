package com.example.UserDetails.users;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public List<UserEntity> getUserAll() {
        return userRepository.findAll();
    }

    public Optional<UserEntity> findById(Integer id) {
        return userRepository.findById(id);
    }

    public void addUserDetails(UserEntity userEntity) {
        Optional<UserEntity> userEntityOptional = userRepository
                .findById(userEntity.getId());
        if (userEntityOptional.isPresent()) {
            throw new IllegalStateException("id taken");
        }
        userRepository.save(userEntity);
    }

    public UserEntity updateUser(Integer id, UserEntity updatedUser) {
        Optional<UserEntity> existingUserOptional = userRepository.findById(id);
        if (existingUserOptional.isPresent()) {
            UserEntity existingUser = existingUserOptional.get();
            existingUser.setName(updatedUser.getName());
            existingUser.setEmail(updatedUser.getEmail());
            existingUser.setPhoneNo(updatedUser.getPhoneNo());
            existingUser.setGender(updatedUser.getGender());
            return userRepository.save(existingUser);
        } else {
            throw new IllegalArgumentException("User with id" + id + "not found");
        }
    }

    public void deleteUser(Integer id) {
        boolean exists = userRepository.existsById(id);
        if (!exists) {
            throw new IllegalStateException("student with id" + id + "does not exists");
        }
        userRepository.deleteById(id);
    }

}