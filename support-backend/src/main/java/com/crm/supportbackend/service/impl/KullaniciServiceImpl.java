package com.crm.supportbackend.service.impl;

import com.crm.supportbackend.dto.KullaniciDto;
import com.crm.supportbackend.dto.KullaniciLoginDto;
import com.crm.supportbackend.entity.Kullanici;
import com.crm.supportbackend.entity.Rol;
import com.crm.supportbackend.repo.KullaniciRepository;
import com.crm.supportbackend.service.KullaniciService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
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

        // Key'e göre rol belirleme
        if ("123".equals(dto.getRol())) {
            rol = Rol.SUPPORT;
            if (!"123".equals(dto.getKey())) {
                throw new RuntimeException("Support kullanıcıları için key '123' olmalı.");
            }
        } else if ("789".equals(dto.getRol())) {
            rol = Rol.ADMIN;
            if (!"789".equals(dto.getKey())) {
                throw new RuntimeException("Admin kullanıcıları için key '789' olmalı.");
            }
        } else if (dto.getRol() == null || dto.getRol().isBlank()) {
            rol = Rol.CUSTOMER;
        } else {
            throw new RuntimeException("Geçersiz rol veya key. Rol olarak sadece '123', '789' veya boş değer kabul edilir.");
        }

        Kullanici kullanici = new Kullanici();
        kullanici.setName(dto.getName());
        kullanici.setSurname(dto.getSurname());
        kullanici.setPhone(dto.getPhone());
        kullanici.setEmail(dto.getEmail());
        kullanici.setKey(dto.getKey());
        kullanici.setPassword(passwordEncoder.encode(dto.getPassword()));
        kullanici.setRol(rol);

        return kullaniciRepository.save(kullanici);
    }

    @Override
    public String login(KullaniciLoginDto dto) {
        // Kullanıcıyı email ile bul
        Kullanici kullanici = kullaniciRepository.findByEmail(dto.getEmail())
                .orElseThrow(() -> new UsernameNotFoundException("Kullanıcı bulunamadı"));

        // Şifreyi kontrol et
        if (!passwordEncoder.matches(dto.getPassword(), kullanici.getPassword())) {
            throw new RuntimeException("Yanlış şifre");
        }

        // JWT token oluşturma işlemi burada yapılacak

        return "Başarılı giriş"; // Başarılı giriş mesajını döndürüyoruz
    }




    @Override
    public Kullanici getKullaniciByEmail(String email) {
        return kullaniciRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("Kullanıcı bulunamadı"));
    }




}

