package com.crm.supportbackend.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Data
public class DestekTalep {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String lisans;
    private String konu;
    private String mesaj;
    private LocalDateTime tarih;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "kullanici_id")
    private Kullanici kullanici;

    @PrePersist
    protected void onCreate() {
        tarih = LocalDateTime.now();
    }

    // Getters & Setters
}

