package com.crm.supportbackend.controller;

import com.crm.supportbackend.dto.DestekTalepDto;
import com.crm.supportbackend.dto.KullaniciListeDto;
import com.crm.supportbackend.service.SupportService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/support")
@RequiredArgsConstructor
@CrossOrigin(origins = "*") // Gerekirse frontend için CORS aç
public class SupportController {

    private final SupportService supportService;

    @PreAuthorize("hasRole('SUPPORT')")
    @GetMapping("/kullanicilar")
    public List<KullaniciListeDto> getAllKullanicilar() {
        return supportService.getAllKullanicilar();
    }

    @GetMapping("/destek-talepleri")
    @PreAuthorize("hasRole('SUPPORT')")
    public ResponseEntity<List<DestekTalepDto>> tumDestekTalepleriniGetir() {
        List<DestekTalepDto> talepler = supportService.tumDestekTalepleriniGetir();
        return ResponseEntity.ok(talepler);
    }
}
