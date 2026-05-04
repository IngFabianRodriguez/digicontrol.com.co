import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

interface Service {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-services-section',
  imports: [CommonModule, CardModule, ButtonModule],
  template: `
    <section id="services" class="services">
      <div class="container-section">

        <h2 class="section-title section-title--light">SERVICIOS</h2>
        <p class="services__subtitle">Ofrecemos a nuestros clientes los siguientes servicios</p>

        <div class="services__grid">
          @for (service of services; track service.title) {
            <div class="services__card">
              <div class="services__icon">{{ service.icon }}</div>
              <h3 class="services__title">{{ service.title }}</h3>
              <p class="services__desc">{{ service.description }}</p>
            </div>
          }
        </div>

      </div>
    </section>
  `,
  styleUrl: './services-section.scss'
})
export class ServicesSection {
  services: Service[] = [
    {
      icon: '🛰️',
      title: 'RASTREO SATELITAL',
      description: 'Sistema de localización y rastreo de vehículos basado en tecnología GPS. Los datos son transmitidos por redes GPRS a nuestra central de monitoreo, permitiendo la ubicación y visualización en tiempo real del vehículo en toda Colombia.'
    },
    {
      icon: '⚡',
      title: 'CONTROLADORES DE VELOCIDAD',
      description: 'Dispositivos electrónicos de alta tecnología diseñados para cumplir la resolución 1122 del Ministerio de Transporte. Líderes en ventas con más de 5.000 unidades instaladas a nivel nacional. Certificación para descargar comparendos.'
    },
    {
      icon: '🚕',
      title: 'TAXÍMETROS',
      description: 'Microtaxímetro electrónico totalizador que automáticamente realiza el incremento del recargo nocturno y dominical. Cinco dígitos de color blanco, totaliza en Publik, reloj digital, visualización de hora y garantía de un año.'
    },
    {
      icon: '🔧',
      title: 'MANTENIMIENTO',
      description: 'Personal calificado para garantizar la calidad, confiabilidad y seguridad de los equipos instalados. Disponemos de instalaciones y personal entrenado para atender y solucionar en el menor tiempo posible cualquier tipo de falla.'
    }
  ];
}