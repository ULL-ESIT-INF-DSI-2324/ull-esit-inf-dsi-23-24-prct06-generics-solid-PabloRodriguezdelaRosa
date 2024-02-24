import { Factura } from './factura';
import { Pdf } from './pdf';
import { Html } from './html';

/**
 * Clase que representa la facturación
 * @param facturas Array de facturas
 */
export class Facturacion {
  private facturas: Factura[] = [];
  /**
   * Añade una factura al array de facturas
   * @param factura Factura a añadir
   */
  add_factura(factura: Factura) {
    this.facturas.push(factura);
  }
  /**
   * Borra una factura del array de facturas
   * @param factura Factura a borrar
   */
  delete_factura(factura: Factura) {
    this.facturas = this.facturas.filter((f) => f !== factura);
  }
  /**
   * Muestra las facturas
   */
  show_facturas() {
    for (const f of this.facturas) {
      if (f instanceof Pdf) {
        console.log(f.to_pdf());
      } else if (f instanceof Html) {
        console.log(f.to_html());
      }
    }
  }
  /**
   * Getter del array de facturas
   * @returns Devuelve el array de facturas
   */
  get_facturas() {
    return this.facturas;
  }
}