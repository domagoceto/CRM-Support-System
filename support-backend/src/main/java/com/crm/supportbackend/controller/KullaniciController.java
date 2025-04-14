package com.crm.supportbackend.controller;

import com.crm.supportbackend.Util.JWTUtil;
import com.crm.supportbackend.dto.KullaniciDto;
import com.crm.supportbackend.dto.KullaniciLoginDto;
import com.crm.supportbackend.entity.Kullanici;
import com.crm.supportbackend.service.KullaniciService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/kullanici")
@CrossOrigin(origins = "*") // CORS açık olmalı frontend için
public class KullaniciController {

    @Autowired
    private KullaniciService kullaniciService;

    @Autowired
    private JWTUtil jwtUtil;

    @PostMapping("/giris")
    public ResponseEntity<?> login(@RequestBody KullaniciLoginDto dto) {
        try {
            String loginResult = kullaniciService.login(dto); // Kullanıcıyı doğrulama
            String token = jwtUtil.generateToken(dto.getEmail()); // JWT token üretme
            return ResponseEntity.ok("Başarılı giriş. Token: " + token); // Token'ı dön
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Giriş başarısız: " + e.getMessage());
        }
    }

    @PostMapping("/kayit")
    public ResponseEntity<?> register(@RequestBody KullaniciDto dto) {
        try {
            Kullanici yeniKullanici = kullaniciService.register(dto);
            return ResponseEntity.ok("Kayıt başarılı: " + yeniKullanici.getEmail());
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
