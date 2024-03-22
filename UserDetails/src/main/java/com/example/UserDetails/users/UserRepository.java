package com.example.UserDetails.users;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface UserRepository extends JpaRepository<UserEntity, Integer> {

    @Query("SELECT u FROM UserEntity u WHERE u.id = ?1")
    Optional<UserEntity> findUserEntityById(Integer id);

    @Override
    boolean existsById(Integer id);
}
