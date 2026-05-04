# DigiControl — Apple Edition

Rediseño del sitio web corporativo de DigiControl bajo los estándares estéticos de Apple (Clean, Premium, Tangible). Transformación de herramienta técnica en vitrina de lujo tecnológico para incentivar la compra.

---

## 1. Visión del Proyecto

DigiControl es una empresa colombiana líder en soluciones de GPS y telemetría vehicular. Este proyecto es la nueva versión del sitio web corporativo, diseñado con la estética premium de Apple: glassmorfismo, tipografía Inter, espacios en blanco generosos y micro-interacciones fluidas.

---

## 2. Stack Tecnológico

| Capa | Tecnología |
|---|---|
| Framework | Angular 21 (standalone components) |
| UI Suite | PrimeNG 21 |
| Layout | PrimeFlex |
| Animaciones | Angular Animations API |
| Estilos | SCSS con variables CSS |
| Iconos | PrimeIcons + emoji como iconografía de producto |
| API Maps | Google Maps Embed |

---

## 3. Repositorio

```
https://github.com/IngFabianRodriguez/digicontrol.com.co
```

**Rama principal:** `main`

---

## 4. Desarrollo Local

### Requisitos
- Node.js 18+ (preferiblemente 20 LTS)
- npm 9+

### Instalación
```bash
cd digicontrol-web
npm install
```

### Servidor de desarrollo
```bash
npm run start -- --host 0.0.0.0 --port 4200
```
Abre `http://localhost:4200`

### Build de producción
```bash
npm run build
```
Output: `digicontrol-web/dist/`

### Build completo (Angular completo)
```bash
ng build
```

---

## 5. Estructura del Proyecto

```
digicontrol-clone/
├── README.md                    ← Este archivo
├── LICENSE
└── digicontrol-web/             ← Angular app
    ├── src/
    │   ├── index.html
    │   ├── main.ts
    │   ├── styles.scss           ← Variables CSS globales, resets, tipografía
    │   └── app/
    │       ├── app.ts            ← Componente raíz
    │       ├── app.config.ts     ← Providers (PrimeNG, Router, Animations)
    │       ├── app.routes.ts     ← Rutas
    │       ├── config.ts         ← Config general
    │       ├── routes.ts
    │       ├── components/       ← Secciones de página
    │       │   ├── navbar/       ← Navbar glassmorphism
    │       │   ├── hero-section/
    │       │   ├── product-section/
    │       │   ├── services-section/
    │       │   ├── about-section/
    │       │   ├── clients-section/
    │       │   ├── portfolio-section/
    │       │   ├── tech-section/
    │       │   ├── contact-section/ ← Formulario + Google Maps
    │       │   └── whatsapp-widget/
    │       ├── layout/           ← Componentes de layout
    │       └── services/        ← Servicios (WhatsApp API)
    ├── angular.json
    ├── package.json
    └── tsconfig.json
```

Cada componente tiene:
- `.ts` → Component class + template inline
- `.scss` → Estilos propios (metodología BEM)

---

## 6. Design System

### Paleta de Colores

| Token | Hex | Uso |
|---|---|---|
| `--bg-primary` | `#FFFFFF` | Fondo principal |
| `--bg-secondary` | `#F5F5F7` | Fondo secciones Bento |
| `--bg-card` | `#FFFFFF` | Cards con sombra suave |
| `--text-primary` | `#1D1D1F` | Texto principal |
| `--text-secondary` | `#86868b` | Texto secundario |
| `--text-accent` | `#0071E3` | Azul DigiControl / Apple accent |
| `--border-subtle` | `rgba(0,0,0,0.06)` | Bordes discretos |

### Tipografía
- **Font:** Inter (Google Fonts)
- **Pesos:** 400 (regular), 500 (medium), 700 (bold)
- **Headline:** -0.022em letter-spacing (estilo Apple)

### Border Radius
- Cards: `18px` - `22px`
- Botones pill: `980px`
- Inputs: `12px`

### Glassmorphism (Navbar)
```scss
background: rgba(255, 255, 255, 0.68);
backdrop-filter: blur(20px) saturate(180%);
border: 1px solid rgba(255, 255, 255, 0.4);
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.06);
border-radius: 22px;
```

### Dark Mode
Soporte via `[data-theme="dark"]` selector en variables CSS. Glass.navbar oscurece a `rgba(28, 28, 30, 0.72)`.

---

## 7. Breakpoints Responsivos

| Breakpoint | Ancho | Layout |
|---|---|---|
| Desktop | 1200px+ | 3-4 columnas, navbar full |
| Tablet | 768px - 1199px | 2 columnas, navbar hamburger |
| Mobile | < 768px | 1 columna, navbar capsule + hamburger |

**Importante:** Usar siempre `768px` como breakpoint único tablet/mobile. No usar `900px`.

---

## 8. Secciones de Página

### Navbar
- Glassmorfismo con blur 20px
- Logo Digicontrol a la izquierda
- Links de navegación al centro (desktop)
- CTA "Plataforma" + hamburguesa a la derecha (tablet/mobile)
- Sticky con efecto de scroll

### Hero Section
- 90vh altura
- Headline masivo con letter-spacing Apple
- Imagen de producto con sombra paralela
- CTA pill-shaped azul

### Product Section
- Grid Bento con cards `p-card`
- Cards con `background: #F5F5F7`, sin borde
- Hover: elevación + escala suave

### Services Section
- Grid de servicios con iconografía emoji
- Transiciones de escala al hover

### About Section
- Texto editorial con estadísticas
- Transiciones de reveal al scroll

### Clients Section
- Logo grid de clientes
- Efecto de logos que se revelan progresivamente

### Portfolio Section
- Galeria de casos de éxito
- Hover con overlay e información

### Tech Section
- Grid de tecnologías con badges
- Animaciones de entrada escalonadas

### Contact Section
- **Left:** Info cards (dirección, WhatsApp, email, horario) + Google Maps embed
- **Right:** Formulario de contacto con validación
- Formulario envía por WhatsApp via `wa.me` API

### WhatsApp Widget
- Botón flotante fijo en esquina inferior derecha
- Animación de pulso para llamar atención
- Click abre WhatsApp con mensaje predefinido

---

## 9. Google Maps Embed

**Ubicación:** Contact Section
**Dirección:** Carrera 68C No. 74A – 45, Bogotá, Colombia

**Embed URL (oficial Digicontrol GPS):**
```
https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.8983948841773!2d-74.0853528!3d4.6814633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9b19377425e1%3a0x6f7b23e1d885a07a!2sDIGICONTROL+GPS!5e0!3m2!1ses!2sco!4v1!5m1!1seb
```

**Place ID:** `0x8e3f9b19377425e1:0x6f7b23e1d885a07a`
**Coords:** `4.6814633, -74.0853528`

Para actualizar: Ir a Google Maps → buscar "DIGICONTROL GPS" → Compartir → Incorporar un mapa → copiar `src` del iframe.

---

## 10. API de Contacto

El formulario de contacto usa WhatsApp como canal de entrega:

```typescript
window.open(`https://wa.me/573112333597?text=${text}`, '_blank');
```

El mensaje incluye: nombre, empresa, ciudad, cantidad de vehículos y mensaje del usuario.

---

## 11. Configuración PrimeNG

```typescript
// src/app/app.config.ts
providePrimeNG({
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: false,
      cssLayer: { name: 'primeng', order: 'primeng' }
    }
  }
})
```

Dark mode manual implementado via CSS custom properties, no via PrimeNG preset.

---

## 12. Errores Conocidos y Soluciones

### NG5002: Unexpected closing tag
Causa: Tags HTML mal cerrados en templates inline de componentes.
Fix: Contar `<div>` apertura vs `</div>` cierre en el bloque afectado.

### Errores TS de PrimeNG (pre-existentes)
```
Cannot find module 'primeng/inputtext'
Cannot find module '@angular/core/primitives/di'
```
Causa: `moduleResolution` en `tsconfig.json`. **No son bloqueantes** para el build de producción. Verificar con `npm run build`.

### SASS darken() deprecado
```scss
// ❌ Deprecado
background: darken($wpp-green, 6%);
// ✅ Correto
background: color.adjust($wpp-green, $lightness: -6%);
```

---

## 13. Workflow de Commits

```bash
git add .
git commit -m "tipo: descripción corta"
git push origin main
```

Tipos: `feat:`, `fix:`, `refactor:`, `docs:`, `style:`

---

## 14. Enlaces de Producción

| Entorno | URL |
|---|---|
| Producción | `http://server.digicontrol.com.co` |
| WhatsApp | `https://wa.me/573112333597` |
| Email | `comercial@digicontrol.com.co` |

---

## 15. Contacto del Proyecto

- **Desarrollador:** Principal Software Architect
- **Cliente:** DigiControl — Soluciones GPS y telemetría vehicular
- **Ubicación:** Bogotá, Colombia · Desde 1997
