import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clients-section',
  imports: [CommonModule],
  template: `
    <section id="clients" class="section clients">
      <div class="container">
        <div class="clients__header reveal">
          <span class="text-label">Clientes</span>
          <h2 class="text-headline clients__title">
            Empresas que<br />confían en Digicontrol.
          </h2>
          <p class="text-subtitle clients__subtitle">
            Más de 14 empresas de transporte operan con equipos Digicontrol en toda Colombia.
          </p>
        </div>

        <div class="clients__grid reveal">
          @for (c of clients; track c.name) {
            <div class="clients__logo" [title]="c.name">
              <img [src]="c.logo" [alt]="c.name" loading="lazy" />
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styleUrl: './clients-section.scss'
})
export class ClientsSection {
  clients = [
    { name: 'AdmiTaxi',      logo: 'https://digicontrol.com.co/clients/admitaxi.png' },
    { name: 'AdmiTrans',     logo: 'https://digicontrol.com.co/clients/admitrans.png' },
    { name: 'Aransua',       logo: 'https://digicontrol.com.co/clients/aransua.png' },
    { name: 'CityTaxi',      logo: 'https://digicontrol.com.co/clients/citytaxi.png' },
    { name: 'Colturex',      logo: 'https://digicontrol.com.co/clients/colturex.png' },
    { name: 'CTE',           logo: 'https://digicontrol.com.co/clients/cte.png' },
    { name: 'Escotur',       logo: 'https://digicontrol.com.co/clients/escotur.png' },
    { name: 'InverPúblico',  logo: 'https://digicontrol.com.co/clients/inverpublico.png' },
    { name: 'Lidertur',      logo: 'https://digicontrol.com.co/clients/lidertur.png' },
    { name: 'LogisTravel',   logo: 'https://digicontrol.com.co/clients/logistravel.png' },
    { name: 'Renetur',       logo: 'https://digicontrol.com.co/clients/renetur.png' },
    { name: 'TransRincon',   logo: 'https://digicontrol.com.co/clients/transrincon.png' },
    { name: 'Transturismo',  logo: 'https://digicontrol.com.co/clients/transturismo.png' },
    { name: 'Viacoltur',     logo: 'https://digicontrol.com.co/clients/viacoltur.png' },
  ];
}