import { Factura } from './factura';
import { Pdf } from './pdf';
import { Html } from './html';

export class Facturacion {
  private facturas: Factura[] = [];

  add_factura(factura: Factura) {
    this.facturas.push(factura);
  }

  delete_factura(factura: Factura) {
    this.facturas = this.facturas.filter((f) => f !== factura);
  }

  show_facturas() {
    for (const f of this.facturas) {
      if (f instanceof Pdf) {
        console.log(f.to_pdf());
      } else if (f instanceof Html) {
        console.log(f.to_html());
      }
    }
  }
  
  get_facturas() {
    return this.facturas;
  }
}