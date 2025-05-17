package com.crm.supportbackend.config;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final JwtTokenProvider jwtTokenProvider;

    public JwtAuthenticationFilter(JwtTokenProvider jwtTokenProvider) {
        this.jwtTokenProvider = jwtTokenProvider;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain) throws ServletException, IOException {
        System.out.println("🔐 JWT FILTER ÇALIŞTI");

        String path = request.getRequestURI();

        // Giriş ve kayıt yolları için JWT kontrolü yapılmasın
        if (path.equals("/api/kullanici/giris") || path.equals("/api/kullanici/kayit")) {
            filterChain.doFilter(request, response);
            return;
        }

        String header = request.getHeader("Authorization");

        if (header != null && header.startsWith("Bearer ")) {
            String token = header.substring(7);
            if (jwtTokenProvider.validateToken(token)) {
                Authentication auth = jwtTokenProvider.getAuthentication(token); // 🔑 Kullanıcı + roller burada set edilmeli
                SecurityContextHolder.getContext().setAuthentication(auth);
                System.out.println("✅ TOKEN GEÇERLİ, AUTH SET EDİLDİ: " + auth.getName());
            } else {
                System.out.println("❌ TOKEN GEÇERSİZ");
            }
        } else {
            System.out.println("⚠️ Authorization header yok veya format yanlış");
        }

        filterChain.doFilter(request, response);
    }
}
