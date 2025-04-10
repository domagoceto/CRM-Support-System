package com.crm.supportbackend.dto;

import lombok.Data;

@Data
public class KullaniciDto {
    private String ad;
    private String soyad;
    private String email;
    private String sifre;
    private String key;
    private String telefon;
    private String rol;  // "CUSTOMER", "SUPPORT", "ADMIN"
}