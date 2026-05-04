import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tech-section',
  imports: [CommonModule],
  template: `
    <section id="tech" class="section tech">
      <div class="container">
        <div class="tech__header reveal">
          <span class="text-label">Tecnología</span>
          <h2 class="text-headline tech__title">
            Diseñado para el<br />camino colombiano.
          </h2>
          <p class="text-subtitle tech__subtitle">
            Cada equipo cumple las normas del Ministerio de Transporte y es probado en condiciones reales.
          </p>
        </div>

        <div class="tech__grid">
          @for (f of features; track f.title) {
            <div class="tech__feature reveal">
              <div class="tech__feature-icon">{{ f.icon }}</div>
              <div class="tech__feature-body">
                <h3 class="tech__feature-title">{{ f.title }}</h3>
                <p class="tech__feature-desc">{{ f.desc }}</p>
              </div>
            </div>
          }
        </div>

        <!-- Stats — each card is always visible, Apple glass style -->
        <div class="tech__stats">
          @for (stat of stats; track stat.num) {
            <div class="tech__stat reveal visible">
              <div class="tech__stat-icon">{{ stat.icon }}</div>
              <div class="tech__stat-body">
                <span class="tech__stat-num">{{ stat.num }}</span>
                <span class="tech__stat-label">{{ stat.label }}</span>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styleUrl: './tech-section.scss'
})
export class TechSection {
  features = [
    { icon: '🛰️', title: 'Rastreo GPS en Tiempo Real', desc: 'Sistema de localización con cobertura nacional urbana y rural. Posición y velocidad actualizadas en cada momento.' },
    { icon: '📡', title: 'Transmisión GPRS', desc: 'Datos transmitidos por redes móviles GPRS a nuestra plataforma web segura. Sin límite de distancia.' },
    { icon: '🔔', title: 'Alarmas Inteligentes', desc: 'Notificaciones instantáneas por exceso de velocidad, salida de perímetro geográfico y eventos personalizados.' },
    { icon: '📱', title: 'Acceso desde Cualquier Dispositivo', desc: 'Plataforma web responsive. Accede desde PC, tablet o celular sin instalar nada.' },
    { icon: '🛡️', title: 'Datos Seguros y Privados', desc: 'Servidores dedicados con respaldo. Información accesible solo por el propietario con credenciales.' },
    { icon: '🔧', title: 'Soporte Técnico en Bogotá', desc: 'Ingenieros locales disponibles para instalación, mantenimiento y capacitación.' },
  ];

  stats = [
    { num: '5.000+', label: 'Equipos activos en Colombia', icon: '📡' },
    { num: '27 años', label: 'De experiencia en el sector', icon: '🏆' },
    { num: '100%', label: 'Certificado Mintransporte', icon: '✅' },
    { num: '24/7', label: 'Soporte técnico disponible', icon: '🎧' },
  ];
}