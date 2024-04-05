package com.example.UserDetails.users;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.UuidGenerator;

@Entity
@Table(name = "user_entity")
@Data
public class UserEntity {
    @Id
    @Schema(description = "user unique id given by the company")
    private Integer id;
    @Schema(description = "user name of individual person")
    private String name;
    @Schema(description = "user mail id")
    private String email;
    @Schema(description = "user phone No for contact purposes")
    private String phone_no;
    @Schema(description = "user gender")
    private String gender;
}
