import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-contact-section',
  imports: [CommonModule, FormsModule, InputTextModule, TextareaModule, ButtonModule],
  template: `
    <section id="contact" class="section contact">
      <div class="container">
        <div class="contact__header reveal">
          <span class="text-label">Contacto</span>
          <h2 class="text-headline contact__title">
            Hablemos de<br />tu proyecto.
          </h2>
          <p class="text-subtitle contact__subtitle">
            Contáctanos y un ingeniero te asesorará sin compromiso para encontrar la mejor solución para tu flota.
          </p>
        </div>

        <div class="contact__grid">
          <!-- Left: info -->
          <div class="contact__info reveal">
            <div class="contact__info-cards">
              <div class="contact__info-card">
                <span class="contact__info-icon">📍</span>
                <div>
                  <span class="contact__info-label">Dirección</span>
                  <span class="contact__info-value">Carrera 68C No. 74A – 45, Bogotá, Colombia</span>
                </div>
              </div>
              <div class="contact__info-card">
                <span class="contact__info-icon">💬</span>
                <div>
                  <span class="contact__info-label">WhatsApp</span>
                  <a href="https://wa.me/573112333597" target="_blank" class="contact__info-link">(+57) 311 233 3597</a>
                </div>
              </div>
              <div class="contact__info-card">
                <span class="contact__info-icon">📧</span>
                <div>
                  <span class="contact__info-label">Correo</span>
                  <a href="mailto:comercial@digicontrol.com.co" class="contact__info-link">comercial@digicontrol.com.co</a>
                </div>
              </div>
              <div class="contact__info-card">
                <span class="contact__info-icon">⏰</span>
                <div>
                  <span class="contact__info-label">Horario</span>
                  <span class="contact__info-value">Lun - Vie: 8:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>

            <!-- Map -->
            <div class="contact__map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.8983948841773!2d-74.0853528!3d4.6814633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9b19377425e1%3a0x6f7b23e1d885a07a!2sDIGICONTROL+GPS!5e0!3m2!1ses!2sco!4v1!5m1!1seb"
                width="100%" height="220" style="border:0; border-radius: 16px;"
                allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="Digicontrol GPS - Carrera 68C No. 74A – 45, Bogotá">
              </iframe>
            </div>
          </div>

          <!-- Right: form -->
          <div class="contact__form-wrap reveal">
            <div class="contact__form-card">
              <h3 class="contact__form-title">Solicitar información</h3>
              <p class="contact__form-subtitle">Te respondemos en menos de 2 horas durante horario laboral.</p>

              <form class="contact__form" (ngSubmit)="onSubmit()">
                <div class="contact__form-row">
                  <div class="contact__form-field">
                    <label>Nombre completo *</label>
                    <input pInputText [(ngModel)]="form.name" name="name" placeholder="Ej. Carlos Martínez" />
                  </div>
                  <div class="contact__form-field">
                    <label>Correo electrónico *</label>
                    <input pInputText [(ngModel)]="form.email" name="email" type="email" placeholder="carlos@empresa.com" />
                  </div>
                </div>
                <div class="contact__form-row">
                  <div class="contact__form-field">
                    <label>Empresa</label>
                    <input pInputText [(ngModel)]="form.company" name="company" placeholder="Nombre de la empresa" />
                  </div>
                  <div class="contact__form-field">
                    <label>Ciudad</label>
                    <input pInputText [(ngModel)]="form.city" name="city" placeholder="Ej. Bogotá" />
                  </div>
                </div>
                <div class="contact__form-field">
                  <label>¿Cuántos vehículos tienes?</label>
                  <input pInputText [(ngModel)]="form.vehicles" name="vehicles" placeholder="Ej. 15 vehículos" />
                </div>
                <div class="contact__form-field">
                  <label>¿En qué te podemos ayudar? *</label>
                  <textarea pTextarea [(ngModel)]="form.message" name="message" rows="4"
                    placeholder="Cuéntanos qué necesitas: tipo de equipo, servicio, presupuesto estimado..."></textarea>
                </div>
                <button pButton type="submit" label="Enviar mensaje" class="contact__submit"></button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './contact-section.scss'
})
export class ContactSection {
  form = { name: '', email: '', company: '', city: '', vehicles: '', message: '' };

  onSubmit() {
    const { name, email, message, company, city, vehicles } = this.form;
    if (!name || !email || !message) return;
    const text = encodeURIComponent(
      `Hola, soy ${name}${company ? ` de ${company}` : ''}${city ? ` (${city})` : ''}.

Vehículos: ${vehicles || 'No especificado'}

Mensaje:
${message}

Mi correo: ${email}`
    );
    window.open(`https://wa.me/573112333597?text=${text}`, '_blank');
  }
}