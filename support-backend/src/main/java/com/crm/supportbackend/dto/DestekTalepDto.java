package com.crm.supportbackend.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class DestekTalepDto {
    private String lisans;
    private String konu;
    private String mesaj;
    private LocalDateTime olusturulmaTarihi;

    private KullaniciDto kullanici;
}
