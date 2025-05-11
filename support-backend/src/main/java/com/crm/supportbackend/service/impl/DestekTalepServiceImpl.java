package com.crm.supportbackend.service.impl;

import com.crm.supportbackend.dto.DestekTalepDto;
import com.crm.supportbackend.entity.DestekTalep;
import com.crm.supportbackend.entity.Kullanici;
import com.crm.supportbackend.repo.DestekTalepRepository;
import com.crm.supportbackend.repo.KullaniciRepository;
import com.crm.supportbackend.service.DestekTalepService;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class DestekTalepServiceImpl implements DestekTalepService {

    private final DestekTalepRepository destekTalepRepository;
    private final KullaniciRepository kullaniciRepository;

    public DestekTalepServiceImpl(DestekTalepRepository destekTalepRepository, KullaniciRepository kullaniciRepository) {
        this.destekTalepRepository = destekTalepRepository;
        this.kullaniciRepository = kullaniciRepository;
    }

    @Override
    public DestekTalep talepOlustur(DestekTalepDto dto, String email) {
        Kullanici kullanici = kullaniciRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Kullanıcı bulunamadı"));

        System.out.println("JWT'den alınan email: " + email);
        System.out.println("Veritabanından bulunan kullanıcı ID: " + kullanici.getId());

        DestekTalep talep = new DestekTalep();
        talep.setKonu(dto.getKonu());
        talep.setMesaj(dto.getMesaj());
        talep.setLisans(dto.getLisans());
        talep.setKullanici(kullanici);

        return destekTalepRepository.save(talep);
    }


    @Override
    public List<DestekTalep> kullanicininTalepleri(Long kullaniciId) {
        return destekTalepRepository.findByKullaniciId(kullaniciId);
    }
}

