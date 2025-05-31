package com.crm.supportbackend.controller;

import com.crm.supportbackend.entity.DestekTalep;
import com.crm.supportbackend.entity.Rol;
import com.crm.supportbackend.repo.DestekTalepRepository;
import com.crm.supportbackend.repo.KullaniciRepository;
import lombok.RequiredArgsConstructor;
import com.crm.supportbackend.entity.Kullanici;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class AdminController {

    private final KullaniciRepository kullaniciRepository;
    private final DestekTalepRepository destekTalepRepository;

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/users")
    public ResponseEntity<List<Kullanici>> getAllUsers() {
        List<Kullanici> users = kullaniciRepository.findAll();
        return ResponseEntity.ok(users);
    }



    @DeleteMapping("/users/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Long id) {
        kullaniciRepository.deleteById(id);
        return ResponseEntity.ok("Kullanıcı silindi");
    }

    @PutMapping("/users/{id}/role")
    public ResponseEntity<?> updateRole(@PathVariable Long id, @RequestParam String role) {
        Optional<Kullanici> userOpt = kullaniciRepository.findById(id);
        if (userOpt.isPresent()) {
            Kullanici user = userOpt.get();
            try {
                Rol yeniRol = Rol.valueOf(role.toUpperCase()); // String → Enum dönüşümü
                user.setRol(yeniRol);
                kullaniciRepository.save(user);
                return ResponseEntity.ok("Rol güncellendi");
            } catch (IllegalArgumentException e) {
                return ResponseEntity.badRequest().body("Geçersiz rol: " + role);
            }
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Kullanıcı bulunamadı");
    }

    @GetMapping("/destek-talepleri")
    public ResponseEntity<List<DestekTalep>> getAllDestekTalepleri() {
        List<DestekTalep> talepler = destekTalepRepository.findAll();
        return ResponseEntity.ok(talepler);
    }


}
