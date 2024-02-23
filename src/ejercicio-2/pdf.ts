import { Factura } from "./factura";

export class Pdf implements Factura {
  vendedor: string;
  comprador: string;
  importe: number;
  concepto: string;
  fichero: string = "Pdf";
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
  to_pdf() {
    return `${this.vendedor}, ${this.comprador}, ${this.importe}, ${this.concepto}, ${this.fichero}, ${this.impuestos}, ${this.total}, ${this.fecha}`;
  }
}