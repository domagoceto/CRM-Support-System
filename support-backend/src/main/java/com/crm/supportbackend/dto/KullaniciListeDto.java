package com.crm.supportbackend.dto;

import lombok.Data;

@Data
public class KullaniciListeDto {
    private Long id;
    private String name;
    private String surname;
    private String email;
    private String phone;
    private String rol; // "CUSTOMER", "SUPPORT", "ADMIN"
}
