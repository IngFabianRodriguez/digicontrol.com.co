import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { ButtonModule } from 'primeng/button';
import { Drawer } from 'primeng/drawer';
import { NavbarComponent } from '../../components/navbar/navbar';
import { HeroSection } from '../../components/hero-section/hero-section';
import { ProductSection } from '../../components/product-section/product-section';
import { TechSection } from '../../components/tech-section/tech-section';
import { PortfolioSection } from '../../components/portfolio-section/portfolio-section';
import { ClientsSection } from '../../components/clients-section/clients-section';
import { AboutSection } from '../../components/about-section/about-section';
import { ContactSection } from '../../components/contact-section/contact-section';
import { WhatsAppWidget } from '../../components/whatsapp-widget/whatsapp-widget';
import { WhatsAppService } from '../../services/whatsapp.service';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule, FormsModule, InputTextModule, TextareaModule, ButtonModule, Drawer,
    NavbarComponent, HeroSection, ProductSection, TechSection,
    PortfolioSection, ClientsSection, AboutSection, ContactSection,
    WhatsAppWidget,
  ],
  template: `
    <app-navbar />
    <main>
      <app-hero-section
        (openContact)="openContactPanel('hero')"
        (openWhatsApp)="openWhatsAppDirect()"
      />
      <app-product-section />
      <app-tech-section />
      <app-portfolio-section />
      <app-clients-section />
      <app-about-section />
      <app-contact-section />
    </main>

    <!-- WhatsApp floating widget -->
    <app-whatsapp-widget />

    <footer class="footer">
      <div class="footer__inner">
        <div class="footer__brand">
          <span class="footer__logo-icon">◆</span>
          <span class="footer__logo-name">Digicontrol</span>
          <p class="footer__tagline">Tecnología satelital para el transporte colombiano desde 1997.</p>
        </div>
        <div class="footer__links">
          <a href="#product">Producto</a>
          <a href="#tech">Tecnología</a>
          <a href="#about">Nosotros</a>
          <a href="#contact">Contacto</a>
        </div>
        <div class="footer__bottom">
          <span>© 2026 Digicontrol GPS Colombia.</span>
          <div class="footer__legal">
            <a href="#">Política de privacidad</a>
          </div>
        </div>
      </div>
    </footer>

    <!-- Apple-style p-drawer from right — Contact form without page reload -->
    <p-drawer [(visible)]="sidebarVisible"
              position="right"
              [showCloseIcon]="true"
              styleClass="dc-drawer"
              [maskStyle]="{ backdropFilter: 'blur(4px)' }"
              header="Solicitar información">
      <ng-template pTemplate="content">
        <form class="dc-drawer-form" (ngSubmit)="onDrawerSubmit()">
          <div class="dc-drawer-form__field">
            <label>Nombre completo *</label>
            <input pInputText [(ngModel)]="drawerForm.name" name="name" placeholder="Ej. Carlos Martínez" />
          </div>
          <div class="dc-drawer-form__field">
            <label>Correo electrónico *</label>
            <input pInputText [(ngModel)]="drawerForm.email" name="email" type="email" placeholder="carlos@empresa.com" />
          </div>
          <div class="dc-drawer-form__field">
            <label>Empresa</label>
            <input pInputText [(ngModel)]="drawerForm.company" name="company" placeholder="Nombre de la empresa" />
          </div>
          <div class="dc-drawer-form__field">
            <label>Ciudad</label>
            <input pInputText [(ngModel)]="drawerForm.city" name="city" placeholder="Ej. Bogotá" />
          </div>
          <div class="dc-drawer-form__field">
            <label>¿Cuántos vehículos tienes?</label>
            <input pInputText [(ngModel)]="drawerForm.vehicles" name="vehicles" placeholder="Ej. 15 vehículos" />
          </div>
          <div class="dc-drawer-form__field">
            <label>¿En qué te podemos ayudar? *</label>
            <textarea pTextarea [(ngModel)]="drawerForm.message" name="message" rows="5"
              placeholder="Cuéntanos qué necesitas: tipo de equipo, servicio, presupuesto estimado..."></textarea>
          </div>
          <button pButton type="submit" label="Enviar mensaje" class="dc-drawer-submit"></button>
        </form>
      </ng-template>
    </p-drawer>
  `,
  styles: [`
    .footer {
      background: var(--bg-navy-deep);
      padding: clamp(40px, 6vw, 64px) 0 clamp(24px, 4vw, 36px);

      &__inner {
        max-width: 1120px;
        margin: 0 auto;
        padding: 0 max(24px, 5vw);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 24px;
        text-align: center;
      }

      &__brand {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
      }

      &__logo-icon { font-size: 1.5rem; color: var(--text-accent); }

      &__logo-name {
        font-family: 'Space Grotesk', sans-serif;
        font-size: 1.1rem;
        font-weight: 700;
        color: #ffffff;
        letter-spacing: -0.02em;
      }

      &__tagline {
        font-size: 0.82rem;
        color: rgba(255,255,255,0.35);
        max-width: 280px;
        line-height: 1.5;
        margin: 0;
      }

      &__links {
        display: flex;
        gap: 24px;
        flex-wrap: wrap;
        justify-content: center;

        a {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.4);
          text-decoration: none;
          transition: color 0.2s;
          &:hover { color: rgba(255,255,255,0.85); }
        }
      }

      &__bottom {
        width: 100%;
        padding-top: 20px;
        border-top: 1px solid rgba(255,255,255,0.07);
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.72rem;
        color: rgba(255,255,255,0.25);
        flex-wrap: wrap;
        gap: 12px;

        @media (max-width: 560px) { flex-direction: column; text-align: center; }
      }

      &__legal {
        display: flex;
        gap: 16px;
        a { color: rgba(255,255,255,0.25); text-decoration: none; &:hover { color: rgba(255,255,255,0.5); } }
      }
    }
  `]
})
export class HomeComponent implements AfterViewInit {
  sidebarVisible = false;
  drawerForm = { name: '', email: '', company: '', city: '', vehicles: '', message: '' };

  constructor(private wpp: WhatsAppService) {}

  openContactPanel(context: 'hero' | 'product' | 'contact') {
    this.wpp.setContext(context);
    this.sidebarVisible = true;
  }

  openWhatsAppDirect() {
    this.wpp.setContext('hero');
    this.wpp.open();
  }

  ngAfterViewInit() {
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        const observer = new IntersectionObserver(
          (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
          { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
        );
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
      }, 100);
    }
  }

  onDrawerSubmit() {
    const { name, email, message, company, city, vehicles } = this.drawerForm;
    if (!name || !email || !message) return;
    const text = encodeURIComponent(
      `Hola, soy ${name}${company ? ` de ${company}` : ''}${city ? ` (${city})` : ''}.

Vehículos: ${vehicles || 'No especificado'}

Mensaje:
${message}

Mi correo: ${email}`
    );
    window.open(`https://wa.me/573112333597?text=${text}`, '_blank');
    this.sidebarVisible = false;
    this.drawerForm = { name: '', email: '', company: '', city: '', vehicles: '', message: '' };
  }
}