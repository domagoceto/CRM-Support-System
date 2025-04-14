package com.crm.supportbackend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")  // İstek yapılacak API endpoint'leri
                .allowedOrigins("http://localhost:3000")  // React uygulamanızın adresi
                .allowedMethods("GET", "POST", "PUT", "DELETE")  // İzin verilen HTTP yöntemleri
                .allowedHeaders("*");  // İzin verilen header'lar
    }
}
