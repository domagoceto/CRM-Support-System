package com.crm.supportbackend.controller;

import com.crm.supportbackend.config.JwtTokenProvider;
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
@CrossOrigin(origins = "*") // Frontend için CORS açtık
public class KullaniciController {

    @Autowired
    private KullaniciService kullaniciService;

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @PostMapping("/giris")
    public ResponseEntity<?> login(@RequestBody KullaniciLoginDto dto) {
        try {
            // Kullanıcı giriş işlemi
            String loginResult = kullaniciService.login(dto);

            // Giriş başarılı, kullanıcıyı al
            Kullanici kullanici = kullaniciService.getKullaniciByEmail(dto.getEmail());

            // JWT token oluştur
            String token = jwtTokenProvider.createToken(dto.getEmail());

            // JSON yanıtı hazırla
            Map<String, Object> response = new HashMap<>();
            response.put("message", loginResult);
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
