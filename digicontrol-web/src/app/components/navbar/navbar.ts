import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhatsAppService } from '../../services/whatsapp.service';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  template: `
    <!-- Top utility bar -->
    <div class="topbar" [class.topbar--scrolled]="isScrolled">
      <div class="topbar__inner">
        <span class="topbar__location">
          <span class="topbar__dot"></span>
          Bogotá, Colombia · Desde 1997
        </span>
        <a href="mailto:comercial@digicontrol.com.co" class="topbar__contact">
          comercial&#64;digicontrol.com.co
        </a>
      </div>
    </div>

    <!-- Main nav — Apple glassmorphism -->
    <nav class="nav" [class.nav--scrolled]="isScrolled" [class.nav--menu-open]="menuOpen">
      <div class="nav__inner">

        <!-- Logo -->
        <a href="#" class="nav__logo" (click)="scrollToTop()">
          <span class="nav__logo-icon">◆</span>
          <span class="nav__logo-name">Digicontrol</span>
        </a>

        <!-- Desktop section links -->
        <ul class="nav__links">
          @for (item of navItems; track item.fragment) {
            <li>
              <a [href]="'#' + item.fragment"
                 class="nav__link"
                 [class.nav__link--active]="activeSection === item.fragment"
                 (click)="scrollTo(item.fragment)">
                {{ item.label }}
              </a>
            </li>
          }
        </ul>

        <!-- Right actions -->
        <div class="nav__right">
          <a href="http://server.digicontrol.com.co" target="_blank" class="btn btn--nav-cta nav__cta">
            Plataforma
          </a>
          <button class="nav__burger" (click)="menuOpen = !menuOpen" [class.open]="menuOpen" aria-label="Menú">
            <span></span><span></span><span></span>
          </button>
        </div>

      </div>

      <!-- Mobile menu — outside nav__inner so it can expand freely -->
      <div class="nav__mobile" [class.nav__mobile--open]="menuOpen">
        <div class="nav__mobile-inner">
          @for (item of navItems; track item.fragment) {
            <a [href]="'#' + item.fragment"
               class="nav__mobile-link"
               [class.nav__mobile-link--active]="activeSection === item.fragment"
               (click)="scrollTo(item.fragment); menuOpen = false">
              {{ item.label }}
            </a>
          }
          <div class="nav__mobile-divider"></div>
          <a href="http://server.digicontrol.com.co" target="_blank"
             class="btn btn--primary" style="justify-content:center; width:100%;">
            Acceder a plataforma
          </a>
          <button class="nav__mobile-wpp" (click)="openWhatsApp(); menuOpen = false">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Escribir al WhatsApp
          </button>
        </div>
      </div>
    </nav>
  `,
  styleUrl: './navbar.scss'
})
export class NavbarComponent implements OnInit {
  navItems = [
    { label: 'Inicio',      fragment: 'hero' },
    { label: 'Producto',   fragment: 'product' },
    { label: 'Tecnología', fragment: 'tech' },
    { label: 'Portafolio', fragment: 'portfolio' },
    { label: 'Nosotros',   fragment: 'about' },
    { label: 'Contacto',   fragment: 'contact' },
  ];

  isScrolled = false;
  menuOpen = false;
  activeSection = 'hero';
  wpp = inject(WhatsAppService);

  ngOnInit() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        this.isScrolled = window.scrollY > 60;
        this.updateActiveSection();
      }, { passive: true });
    }
  }

  private updateActiveSection() {
    const sections = this.navItems.map(n => document.getElementById(n.fragment)).filter(Boolean);
    const scrollY = window.scrollY + 220;
    for (let i = sections.length - 1; i >= 0; i--) {
      const s = sections[i]!;
      if (s.offsetTop <= scrollY) {
        this.activeSection = this.navItems[i].fragment;
        break;
      }
    }
  }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  openWhatsApp() {
    this.wpp.setContext('navbar');
    this.wpp.open();
  }
}