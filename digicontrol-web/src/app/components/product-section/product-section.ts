import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhatsAppService } from '../../services/whatsapp.service';

interface QuickProduct {
  icon: string;
  name: string;
  shortDesc: string;
  badge: string;
  badgeClass: string;
  link: string;
  featured?: boolean;  // true = 2x1 wide card
}

@Component({
  selector: 'app-product-section',
  imports: [CommonModule],
  template: `
    <section id="product" class="section product">
      <div class="container">
        <div class="product__header reveal">
          <span class="text-label">Producto</span>
          <h2 class="text-headline product__title">
            Cuatro soluciones para<br />cada necesidad de tu flota.
          </h2>
          <p class="text-subtitle product__subtitle">
            Equipos certificados, fáciles de instalar y con soporte técnico incluido.
          </p>
        </div>

        <div class="product__grid">
          @for (p of products; track p.name) {
            <div class="product__card reveal"
                 [class.product__card--wide]="p.featured"
                 [attr.data-product]="p.name.toLowerCase().replace(/\s+/g, '-')">
              <div class="product__card-top">
                <span class="product__card-icon">{{ p.icon }}</span>
                <span class="badge" [ngClass]="p.badgeClass">{{ p.badge }}</span>
              </div>
              <h3 class="product__card-name">{{ p.name }}</h3>
              <p class="product__card-desc">{{ p.shortDesc }}</p>
              <div class="product__card-actions">
                <a [href]="'#' + p.link" class="product__card-link">
                  Conocer más
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </a>
                <button class="product__card-wpp" (click)="askProduct(p.name)" title="Preguntar por este producto">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Preguntar
                </button>
              </div>
            </div>
          }
        </div>

        <!-- CTA Banner -->
        <div class="product__banner reveal">
          <div class="product__banner-content">
            <h3 class="product__banner-title">¿No sabes qué equipo necesitas?</h3>
            <p class="product__banner-text">Nuestros ingenieros te asesoran gratis. Contáctanos y te recomendamos la mejor solución para tu tipo de flota.</p>
          </div>
          <div class="product__banner-actions">
            <a href="#contact" class="btn btn--primary">
              Hablar con un experto
            </a>
            <button class="btn btn--whatsapp btn--wpp-desktop" (click)="openBannerWhatsApp()">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Escribir al WhatsApp
            </button>
            <button class="btn btn--wpp-mobile" (click)="openBannerWhatsApp()" title="Escríbenos por WhatsApp">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './product-section.scss'
})
export class ProductSection {
  wpp = inject(WhatsAppService);

  products: QuickProduct[] = [
    {
      icon: '🛰️',
      name: 'Rastreo Satelital GPS',
      shortDesc: 'Seguimiento en tiempo real desde cualquier navegador. Sin apps, sin complicaciones.',
      badge: 'En vivo',
      badgeClass: 'badge--blue',
      link: 'portfolio',
      featured: true   // 2x1 wide
    },
    {
      icon: '⚡',
      name: 'Controladores de Velocidad',
      shortDesc: 'Obligatorios por ley. Certificado 100% Mintransporte — el único con puntaje perfecto.',
      badge: 'Ley 1122',
      badgeClass: 'badge--green',
      link: 'portfolio',
      featured: true   // 2x1 wide
    },
    {
      icon: '🚕',
      name: 'Taxímetro Digital',
      shortDesc: 'Homologado. Incremento automático de tarifas nocturnas y domingos.',
      badge: 'Homologado',
      badgeClass: 'badge--purple',
      link: 'portfolio'
    },
    {
      icon: '📊',
      name: 'Velocímetro Digital',
      shortDesc: 'Odómetro y velocímetro para vehículos antiguos. Fácil instalación en 30 min.',
      badge: 'Tecnología',
      badgeClass: 'badge--orange',
      link: 'portfolio'
    }
  ];

  askProduct(productName: string) {
    this.wpp.setProduct(productName);
    this.wpp.setContext('product');
    this.wpp.open();
  }

  openBannerWhatsApp() {
    this.wpp.setContext('product');
    this.wpp.open();
  }
}