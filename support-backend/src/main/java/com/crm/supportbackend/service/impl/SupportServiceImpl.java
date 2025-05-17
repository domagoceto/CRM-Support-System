package com.crm.supportbackend.service.impl;

import com.crm.supportbackend.dto.KullaniciListeDto;
import com.crm.supportbackend.entity.Kullanici;
import com.crm.supportbackend.repo.KullaniciRepository;
import com.crm.supportbackend.service.SupportService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class SupportServiceImpl implements SupportService {

    private final KullaniciRepository kullaniciRepository;

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

}
