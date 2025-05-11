package com.crm.supportbackend.repo;

import com.crm.supportbackend.entity.DestekTalep;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface DestekTalepRepository extends JpaRepository<DestekTalep, Long> {
    List<DestekTalep> findByKullaniciId(Long kullaniciId);
}
