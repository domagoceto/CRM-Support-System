package com.crm.supportbackend.service;

import com.crm.supportbackend.dto.DestekTalepDto;
import com.crm.supportbackend.entity.DestekTalep;

import java.util.List;

public interface DestekTalepService {
    DestekTalep talepOlustur(DestekTalepDto dto, String email);
    List<DestekTalep> kullanicininTalepleri(Long kullaniciId);
}

