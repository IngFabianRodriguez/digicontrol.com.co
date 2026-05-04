import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-section',
  imports: [CommonModule],
  template: `
    <section id="about" class="section about">
      <div class="container">
        <div class="about__grid">
          <div class="about__left reveal">
            <span class="text-label">Nosotros</span>
            <h2 class="text-headline about__title">
              27 años<br />construyendo<br />confianza.
            </h2>
            <p class="about__text">
              Somos una compañía colombiana legalmente constituida desde 1997. Fabricamos equipos digitales y satelitales certificados y homologados por el Ministerio de Transporte (CESVI Colombia), cumpliendo todas las normas vigentes.
            </p>
            <p class="about__text">
              Somos <strong>líderes en el mercado nacional</strong> por la calidad excepcional de nuestros productos y servicios de vanguardia. El cliente es el máximo juez de nuestra labor.
            </p>

            <div class="about__pillars">
              <div class="about__pillar">
                <span class="about__pillar-icon">🎯</span>
                <div>
                  <h4 class="about__pillar-title">Objetivo</h4>
                  <p class="about__pillar-text">Desarrollar productos tecnológicos enfocados en la satisfacción del cliente, superando expectativas y cumpliendo requisitos del Gobierno Nacional.</p>
                </div>
              </div>
              <div class="about__pillar">
                <span class="about__pillar-icon">📋</span>
                <div>
                  <h4 class="about__pillar-title">Misión</h4>
                  <p class="about__pillar-text">Brindar productos y servicios acordes a las necesidades del cliente, haciendo la diferencia por servicio y calidad excepcionales a precios accesibles.</p>
                </div>
              </div>
              <div class="about__pillar">
                <span class="about__pillar-icon">🔭</span>
                <div>
                  <h4 class="about__pillar-title">Visión</h4>
                  <p class="about__pillar-text">Ser la compañía más reconocida nacional e internacionalmente por la excelencia de nuestros productos y servicios.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="about__right reveal">
            <div class="about__image-wrap">
              <img src="https://digicontrol.com.co/img/tracking4.png" alt="Digicontrol Bogotá" />
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './about-section.scss'
})
export class AboutSection {}