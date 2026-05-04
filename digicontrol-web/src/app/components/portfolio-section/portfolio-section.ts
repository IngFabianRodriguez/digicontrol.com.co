import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio-section',
  imports: [CommonModule],
  template: `
    <section id="portfolio" class="section portfolio">
      <div class="container">
        <div class="portfolio__header reveal">
          <span class="text-label">Portafolio</span>
          <h2 class="text-headline portfolio__title">
            Cada producto,<br />una solución real.
          </h2>
        </div>

        <div class="portfolio__products">
          @for (p of products; track p.name; let i = $index) {
            <div class="portfolio__item reveal" [class.portfolio__item--reverse]="i % 2 !== 0">
              <div class="portfolio__item-visual">
                <div class="portfolio__item-img-wrap">
                  <img [src]="p.image" [alt]="p.name" />
                </div>
              </div>
              <div class="portfolio__item-content">
                <span class="badge" [ngClass]="p.badgeClass">{{ p.badge }}</span>
                <h3 class="portfolio__item-name">{{ p.name }}</h3>
                <p class="portfolio__item-lead">{{ p.lead }}</p>
                <ul class="portfolio__item-features">
                  @for (f of p.features; track f) {
                    <li>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" fill="rgba(41,151,255,0.15)"/><path d="M5 8l2 2 4-4" stroke="#2997ff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                      {{ f }}
                    </li>
                  }
                </ul>
                <div class="portfolio__item-footer">
                  <div class="portfolio__item-meta">
                    <span>⏱ Instalación: {{ p.install }}</span>
                    <span>🛡 Garantía: {{ p.warranty }}</span>
                  </div>
                  <a href="#contact" class="btn btn--primary">
                    Solicitar cotización
                  </a>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styleUrl: './portfolio-section.scss'
})
export class PortfolioSection {
  products = [
    {
      name: 'Rastreo Satelital GPS',
      image: 'https://digicontrol.com.co/products/rastreosatelital.png',
      badge: 'En Tiempo Real',
      badgeClass: 'badge--blue',
      lead: 'Sistema de localización y seguimiento de vehículos en tiempo real con cubrimiento nacional (urbano y rural). Cumple con los decretos 1079 y 348 de 2015 del Mintransporte.',
      features: [
        'Cumple décretos 1079 y 348 de 2015 — aplica para transporte público, especial, escolar y turismo',
        'Reportes en tiempo real e históricos de posición, velocidad y eventos',
        'Alarmas configurables por exceso de velocidad y salida de perímetro',
        'Acceso a plataforma web — primer mes de datos y plataforma gratis',
        'Instalación aproximada: 30 minutos',
      ],
      install: '30 min aprox.',
      warranty: '1 año'
    },
    {
      name: 'Controladores de Velocidad',
      image: 'https://digicontrol.com.co/products/controlador.png',
      badge: '100% Certificado',
      badgeClass: 'badge--green',
      lead: 'Únicos equipos en Colombia certificados con el máximo puntaje: 100% por el Ministerio de Transporte (Resolución 1122). Obligatorios para transporte público de pasajeros.',
      features: [
        'Único equipo en Colombia con certificación 100% Mintransporte',
        'Emite alarma sonora cuando se excede el límite de velocidad',
        'Se puede instalar en cualquier tipo de vehículo — auto, bus, van, etc.',
        'Expedimos certificación para descargar comparendos por controlador',
        'Más de 5.000 unidades activas a nivel nacional',
      ],
      install: '20-60 min',
      warranty: '1 año'
    },
    {
      name: 'Velocímetro Digital',
      image: 'https://digicontrol.com.co/products/velocimetro.png',
      badge: 'Tecnología',
      badgeClass: 'badge--orange',
      lead: 'Odómetro y velocímetro digital moderno. Ideal para el control de combustible y mantenimientos en vehículos que no cuentan con estos elementos.',
      features: [
        'Visualiza kilometraje recorrido y lo acumula automáticamente',
        'Display de 6 dígitos de alta visibilidad',
        'Disponible en verde, blanco, rojo, azul y ámbar',
        'Cumple función de control de combustible y mantenimiento (cambio de aceite)',
        'Instalación rápida: 30 minutos',
      ],
      install: '30 min aprox.',
      warranty: '1 año'
    },
    {
      name: 'Taxímetro Digital',
      image: 'https://digicontrol.com.co/products/taximetro.png',
      badge: 'Homologado',
      badgeClass: 'badge--purple',
      lead: 'Microtaxímetro electrónico totalizador, homologado y certificado. Incremento automático de recargo nocturno y dominical sin intervención del conductor.',
      features: [
        'Incremento automático del recargo nocturno y dominical',
        'Cinco dígitos blancos en formato Publik — rotación automática',
        'Reloj digital integrado — muestra hora con solo presionar el botón',
        'Homologado y certificado por organismos competentes',
        'Garantía de un año por desperfecto de fábrica',
      ],
      install: '30 min aprox.',
      warranty: '1 año'
    },
  ];
}