package com.crm.supportbackend.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Kullanici {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String surname;
    private String phone;
    private String email;
    private String key;
    private String password;

    @Enumerated(EnumType.STRING)
    private Rol rol;
}
