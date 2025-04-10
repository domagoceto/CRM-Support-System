package com.crm.supportbackend.service.impl;

import com.crm.supportbackend.dto.KullaniciDto;
import com.crm.supportbackend.entity.Kullanici;
import com.crm.supportbackend.entity.Rol;
import com.crm.supportbackend.repo.KullaniciRepository;
import com.crm.supportbackend.service.KullaniciService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class KullaniciServiceImpl implements KullaniciService {

    private final KullaniciRepository kullaniciRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public KullaniciServiceImpl(KullaniciRepository kullaniciRepository, PasswordEncoder passwordEncoder) {
        this.kullaniciRepository = kullaniciRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public Kullanici register(KullaniciDto dto) {
        if (kullaniciRepository.findByEmail(dto.getEmail()).isPresent()) {
            throw new RuntimeException("Bu email ile daha önce kayıt olunmuş.");
        }

        Rol rol;
        try {
            rol = Rol.valueOf(dto.getRol().toUpperCase());
        } catch (Exception e) {
            rol = Rol.CUSTOMER; // Geçersiz veya boşsa default rol
        }

        Kullanici kullanici = new Kullanici();
        kullanici.setName(dto.getAd());
        kullanici.setSurname(dto.getSoyad());
        kullanici.setPhone(dto.getTelefon());
        kullanici.setEmail(dto.getEmail());
        kullanici.setKey(dto.getKey());
        kullanici.setPassword(passwordEncoder.encode(dto.getSifre()));
        kullanici.setRol(rol);

        return kullaniciRepository.save(kullanici);
    }

}

