package com.crm.supportbackend.service;

import com.crm.supportbackend.dto.KullaniciDto;
import com.crm.supportbackend.dto.KullaniciLoginDto;
import com.crm.supportbackend.entity.Kullanici;


public interface KullaniciService {
    Kullanici register(KullaniciDto dto);
    String login(KullaniciLoginDto dto);

}
