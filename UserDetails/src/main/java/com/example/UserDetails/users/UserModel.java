package com.example.UserDetails.users;

import lombok.Data;

@Data
public class UserModel {

    private Integer id;
    private String name;
    private String email;
    private Long phoneNo;
    private String gender;

}
