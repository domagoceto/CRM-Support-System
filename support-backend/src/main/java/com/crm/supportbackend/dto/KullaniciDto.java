package com.crm.supportbackend.dto;

import lombok.Data;

@Data
public class KullaniciDto {
    private String name;
    private String surname;
    private String email;
    private String password;
    private String key;
    private String phone;
    private String rol;  // "CUSTOMER", "SUPPORT", "ADMIN"
}