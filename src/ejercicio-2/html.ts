import { Factura } from "./factura";

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
  get_vendedor() {
    return this.vendedor;
  }
  get_comprador() {
    return this.comprador;
  }
  get_importe() {
    return this.importe;
  }
  get_concepto() {
    return this.concepto;
  }
  get_fichero() {
    return this.fichero;
  }
  get_impuestos() {
    return this.impuestos;
  }
  get_total() {
    return this.total;
  }
  get_fecha() {
    return this.fecha;
  }
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
