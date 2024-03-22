
package com.example.UserDetails.users;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RestControllerAdvice
@RequiredArgsConstructor
@RequestMapping(path = "/api/v2/user")
public class UserController {

    private final UserService userService;

    @GetMapping
    public List<UserEntity> getUserAll(){
        return userService.getUserAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserEntity> getUserId(@PathVariable Integer id){
        Optional<UserEntity> userEntityOptional = userService.findById(id);

        if (userEntityOptional.isPresent()){
            return ResponseEntity.ok(userEntityOptional.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public void registerUserDetails(@RequestBody UserEntity userEntity){
        userService.addUserDetails(userEntity);
    }

    @PutMapping("/{id}")
    public ResponseEntity<UserEntity> updateUser(@PathVariable Integer id, @RequestBody UserEntity updatedUser) {
        try {
            UserEntity updatedUserData = userService.updateUser(id,updatedUser);
            return ResponseEntity.ok(updatedUserData);
        } catch (IllegalArgumentException e){
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping(path = "/{id}")
    public void deleteUser(@PathVariable ("id") Integer id) {
        userService.deleteUser(id);
    }
}
