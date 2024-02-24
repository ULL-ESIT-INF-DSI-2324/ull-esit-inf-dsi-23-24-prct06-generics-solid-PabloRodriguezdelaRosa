import { Factura } from "./factura";

/**
 * Clase que representa una factura en formato PDF
 */
export class Html implements Factura {
  vendedor: string;
  comprador: string;
  importe: number;
  concepto: string;
  fichero: string = "Html";
  impuestos: number;
  total: number;
  fecha: string;
  constructor(vendedor: string, comprador: string, importe: number, concepto: string, impuestos: number, total: number, fecha: string) {
    this.vendedor = vendedor;
    this.comprador = comprador;
    this.importe = importe;
    this.concepto = concepto;
    this.impuestos = impuestos;
    this.total = total;
    this.fecha = fecha;
  }
  /**
   * Getter del vendedor de la factura.
   * @returns Devuelve el vendedor de la factura.
   */
  get_vendedor() {
    return this.vendedor;
  }
  /**
   * Getter del comprador de la factura.
   * @returns Devuelve el comprador de la factura.
   */
  get_comprador() {
    return this.comprador;
  }
  /**
   * Getter del importe de la factura.
   * @returns Devuelve el importe de la factura.
   */
  get_importe() {
    return this.importe;
  }
  /**
   * Getter del concepto de la factura.
   * @returns Devuelve el concepto de la factura.
   */
  get_concepto() {
    return this.concepto;
  }
  /**
   * Getter del tipo de fichero de la factura.
   * @returns devuelve el fichero de la factura.
   */
  get_fichero() {
    return this.fichero;
  }
  /**
   * Getter de los impuestos de la factura.
   * @returns Devuelve los impuestos de la factura.
   */
  get_impuestos() {
    return this.impuestos;
  }
  /**
   * Getter del total de la factura.
   * @returns Devuelve el total de la factura.
   */
  get_total() {
    return this.total;
  }
  /**
   * Getter de la fecha de la factura.
   * @returns Devuelve la fecha de la factura.
   */
  get_fecha() {
    return this.fecha;
  }
  /**
   * Método que devuelve la factura en formato HTML.
   * @returns Devuelve la factura en formato HTML.
   */
  to_html() {
    return `
      <html>
        <head>
          <title>Factura</title>
        </head>
        <body>
          <h1>Factura</h1>
          <p>Vendedor: ${this.vendedor}</p>
          <p>Comprador: ${this.comprador}</p>
          <p>Importe: ${this.importe}</p>
          <p>Concepto: ${this.concepto}</p>
          <p>Fichero: ${this.fichero}</p>
          <p>Impuestos: ${this.impuestos}</p>
          <p>Total: ${this.total}</p>
          <p>Fecha: ${this.fecha}</p>
        </body>
      </html>
    `;
  }
}
