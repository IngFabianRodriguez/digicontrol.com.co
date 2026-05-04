import { Injectable, signal } from '@angular/core';

export type WppContext = 'hero' | 'product' | 'contact' | 'navbar' | 'general';

const CONTEXT_MESSAGES: Record<WppContext, string> = {
  hero:     'Hola, vi el sitio de Digicontrol y me interesa conocer más sobre el sistema de rastreo GPS. ¿Podrían mostrarme una demo?',
  product:  'Hola, estoy interesado en los productos Digicontrol. ¿Cuéntame más sobre los equipos y precios?',
  contact:  'Hola, quiero solicitar información sobre los servicios de Digicontrol.',
  navbar:   'Hola, me gustaría obtener más información sobre Digicontrol.',
  general:  'Hola, me contacté desde el sitio web de Digicontrol.',
};

@Injectable({ providedIn: 'root' })
export class WhatsAppService {
  readonly phone = '573182019761';

  currentContext  = signal<WppContext>('general');
  currentProduct  = signal<string | null>(null);

  setContext(ctx: WppContext) {
    this.currentContext.set(ctx);
  }

  setProduct(productName: string) {
    this.currentProduct.set(productName);
  }

  getMessage(): string {
    const product = this.currentProduct();
    if (product) {
      return `Hola, me interesa el producto "${product}" de Digicontrol. ¿Cuéntame más sobre este equipo, precios y disponibilidad?`;
    }
    return CONTEXT_MESSAGES[this.currentContext()];
  }

  buildUrl(message?: string): string {
    const text = encodeURIComponent(message ?? this.getMessage());
    return `https://wa.me/${this.phone.replace('+', '')}?text=${text}`;
  }

  open(message?: string) {
    window.open(this.buildUrl(message), '_blank');
  }
}
