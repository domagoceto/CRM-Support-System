package com.crm.supportbackend.controller;

import com.crm.supportbackend.Util.JWTUtil;
import com.crm.supportbackend.dto.KullaniciDto;
import com.crm.supportbackend.dto.KullaniciLoginDto;
import com.crm.supportbackend.entity.Kullanici;
import com.crm.supportbackend.service.KullaniciService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

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
            // Kullanıcıyı doğrulama işlemi
            String loginResult = kullaniciService.login(dto); // Service'ten login sonucunu al

            // Kullanıcıyı bulduk ve başarılı giriş sağlandı
            Kullanici kullanici = kullaniciService.getKullaniciByEmail(dto.getEmail()); // Kullanıcıyı e-posta ile bul
            String token = jwtUtil.generateToken(dto.getEmail()); // Token üretme

            // JSON cevap olarak döndürme
            Map<String, Object> response = new HashMap<>();
            response.put("message", loginResult); // "Başarılı giriş" mesajı
            response.put("token", token);
            response.put("rol", kullanici.getRol());
            response.put("ad", kullanici.getName());
            response.put("soyad", kullanici.getSurname());
            response.put("email", kullanici.getEmail());
            response.put("telefon", kullanici.getPhone());

            return ResponseEntity.ok(response);
        } catch (Exception e) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", "Giriş başarısız: " + e.getMessage());
            return ResponseEntity.badRequest().body(errorResponse);
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
