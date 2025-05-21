package com.crm.supportbackend.service.impl;

import com.crm.supportbackend.dto.DestekTalepDto;
import com.crm.supportbackend.dto.KullaniciDto;
import com.crm.supportbackend.dto.KullaniciListeDto;
import com.crm.supportbackend.entity.Kullanici;
import com.crm.supportbackend.repo.DestekTalepRepository;
import com.crm.supportbackend.repo.KullaniciRepository;
import com.crm.supportbackend.service.SupportService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class SupportServiceImpl implements SupportService {

    private final KullaniciRepository kullaniciRepository;
    private final DestekTalepRepository destekTalepRepository; // ✅ eksikti
    private final ModelMapper modelMapper;                     // ✅ eksikti

    @Override
    public List<KullaniciListeDto> getAllKullanicilar() {
        List<Kullanici> entities = kullaniciRepository.findAll();

        return entities.stream().map(k -> {
            KullaniciListeDto dto = new KullaniciListeDto();
            dto.setId(k.getId());
            dto.setName(k.getName());
            dto.setSurname(k.getSurname());
            dto.setEmail(k.getEmail());
            dto.setPhone(k.getPhone());
            dto.setRol(k.getRol().name());
            return dto;
        }).collect(Collectors.toList());
    }

    @Override
    public List<DestekTalepDto> tumDestekTalepleriniGetir() {
        return destekTalepRepository.findAll().stream().map(talep -> {
            DestekTalepDto dto = new DestekTalepDto();
            dto.setLisans(talep.getLisans());
            dto.setKonu(talep.getKonu());
            dto.setMesaj(talep.getMesaj());
            dto.setOlusturulmaTarihi(talep.getTarih());

            Kullanici kullanici = talep.getKullanici();
            if (kullanici != null) {
                KullaniciDto kullaniciDto = new KullaniciDto();
                kullaniciDto.setName(kullanici.getName());
                kullaniciDto.setSurname(kullanici.getSurname());
                kullaniciDto.setEmail(kullanici.getEmail());
                kullaniciDto.setPhone(kullanici.getPhone());
                kullaniciDto.setRol(kullanici.getRol().name());
                dto.setKullanici(kullaniciDto);
            }

            return dto;
        }).collect(Collectors.toList());
    }

}
