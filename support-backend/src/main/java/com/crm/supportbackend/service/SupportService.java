package com.crm.supportbackend.service;

import com.crm.supportbackend.dto.DestekTalepDto;
import com.crm.supportbackend.dto.KullaniciListeDto;
import java.util.List;

public interface SupportService {
    List<KullaniciListeDto> getAllKullanicilar();
    List<DestekTalepDto> tumDestekTalepleriniGetir();
}
