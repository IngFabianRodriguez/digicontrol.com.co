import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-section',
  imports: [CommonModule],
  template: `
    <section id="hero" class="hero">

      <!-- Ambient background — adapts to theme -->
      <div class="hero__ambient">
        <div class="hero__orb hero__orb--1"></div>
        <div class="hero__orb hero__orb--2"></div>
        <div class="hero__grid-overlay"></div>
      </div>

      <!-- Floating nav spacer so content starts below nav -->
      <div class="hero__spacer"></div>

      <div class="container hero__content">

        <!-- Label row -->
        <div class="hero__label-row">
          <span class="badge badge--blue">🛰️ GPS Satelital</span>
          <span class="badge badge--green">✓ Certificados Mintransporte</span>
        </div>

        <!-- Main headline -->
        <h1 class="text-hero hero__headline">
          El sistema de rastreo<br />
          que tu flota necesita.
        </h1>

        <!-- Subtitle -->
        <p class="hero__sub">
          Rastreo GPS en tiempo real, controladores de velocidad y taxímetros<br class="hero__br" />
          certificados. Más de 5.000 vehículos en Colombia desde 1997.
        </p>

        <!-- Action buttons -->
        <div class="hero__actions">
          <button class="btn btn--primary btn--lg" (click)="openContact.emit()">
            Solicitar demo gratuita
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3.75 9h10.5M10.5 4.5l4.5 4.5-4.5 4.5"
                stroke="currentColor" stroke-width="1.75"
                stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <a href="#product" class="btn btn--ghost btn--lg">
            Ver productos
          </a>
          <button class="btn btn--whatsapp btn--lg btn--wpp-desktop" (click)="openWhatsApp.emit()">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Escribir al WhatsApp
          </button>
          <button class="btn btn--wpp-mobile" (click)="openWhatsApp.emit()" title="Escríbenos por WhatsApp">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </button>
        </div>

        <!-- Trust bar -->
        <div class="hero__trust">
          <span class="hero__trust-label">Empresas que confían en nosotros</span>
          <div class="hero__trust-logos">
            <span>AdmiTaxi</span><span class="sep">·</span>
            <span>CTE</span><span class="sep">·</span>
            <span>TransRincon</span><span class="sep">·</span>
            <span>Lidertur</span><span class="sep">·</span>
            <span>+11 más</span>
          </div>
        </div>

      </div>

      <!-- Product visual -->
      <div class="container hero__visual">
        <div class="hero__device">
          <div class="hero__device-glow"></div>
          <div class="hero__device-frame">
            <img
              src="https://digicontrol.com.co/products/rastreosatelital.png"
              alt="Sistema de rastreo GPS Digicontrol"
            />
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="hero__scroll">
        <div class="hero__scroll-mouse">
          <div class="hero__scroll-wheel"></div>
        </div>
        <span>Scroll</span>
      </div>

    </section>
  `,
  styleUrl: './hero-section.scss'
})
export class HeroSection {
  @Output() openContact = new EventEmitter<void>();
  @Output() openWhatsApp = new EventEmitter<void>();
}