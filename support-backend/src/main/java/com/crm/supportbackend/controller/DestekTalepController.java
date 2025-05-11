package com.crm.supportbackend.controller;

import com.crm.supportbackend.dto.DestekTalepDto;
import com.crm.supportbackend.entity.DestekTalep;
import com.crm.supportbackend.entity.Kullanici;
import com.crm.supportbackend.repo.DestekTalepRepository;
import com.crm.supportbackend.repo.KullaniciRepository;
import com.crm.supportbackend.service.DestekTalepService;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/destek-talep")
public class DestekTalepController {

    private final DestekTalepRepository destekTalepRepository;
    private final KullaniciRepository kullaniciRepository;
    private final DestekTalepService destekTalepService;

    public DestekTalepController(DestekTalepRepository destekTalepRepository,
                                 KullaniciRepository kullaniciRepository,
                                 DestekTalepService destekTalepService) {
        this.destekTalepRepository = destekTalepRepository;
        this.kullaniciRepository = kullaniciRepository;
        this.destekTalepService = destekTalepService;
    }

    @PostMapping("/talep")
    public DestekTalep talepOlustur(@RequestBody DestekTalepDto dto) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if (authentication == null || !authentication.isAuthenticated()) {
            throw new RuntimeException("Giriş yapılmamış. Lütfen önce giriş yapın.");
        }

        String email;
        Object principal = authentication.getPrincipal();
        if (principal instanceof org.springframework.security.core.userdetails.User userDetails) {
            email = userDetails.getUsername();
        } else if (principal instanceof String str && !str.equals("anonymousUser")) {
            email = str;
        } else {
            throw new RuntimeException("Kimlik doğrulama başarısız");
        }


        return destekTalepService.talepOlustur(dto, email);
    }



    @GetMapping("/kullanici")
    public List<DestekTalep> kullanicininTalepleri() {
        // Giriş yapan kullanıcıyı çek
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String email = ((User) authentication.getPrincipal()).getUsername();  // Kullanıcıyı Email ile alıyoruz

        Kullanici kullanici = kullaniciRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Kullanıcı bulunamadı"));

        return destekTalepRepository.findByKullaniciId(kullanici.getId());
    }
}
