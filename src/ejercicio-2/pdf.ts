import { Factura } from "./factura";

/**
 * Clase que representa una factura en formato PDF
 * @implements Factura
 * @class
 * @classdesc Clase que representa una factura en formato PDF
 * @constructor
 * @param {string} vendedor - Vendedor de la factura.
 * @param {string} comprador - Comprador de la factura.
 * @param {number} importe - Importe de la factura.
 * @param {string} concepto - Concepto de la factura.
 * @param {number} impuestos - Impuestos de la factura.
 * @param {number} total - Total de la factura.
 * @param {string} fecha - Fecha de la factura.
 * @method get_vendedor - Getter del vendedor de la factura.
 * @method get_comprador - Getter del comprador de la factura.
 * @method get_importe - Getter del importe de la factura.
 * @method get_concepto - Getter del concepto de la factura.
 * @method get_fichero - Getter del tipo de fichero de la factura.
 * @method get_impuestos - Getter de los impuestos de la factura.
 * @method get_total - Getter del total de la factura.
 * @method get_fecha - Getter de la fecha de la factura.
 * @method to_pdf - Método que devuelve la factura en formato PDF.
 */
export class Pdf implements Factura {
  vendedor: string;
  comprador: string;
  importe: number;
  concepto: string;
  fichero: string = "Pdf";
  impuestos: number;
  total: number;
  fecha: string;
  /**
   * Constructor de la clase.
   * @param vendedor 
   * @param comprador 
   * @param importe 
   * @param concepto 
   * @param impuestos 
   * @param total 
   * @param fecha 
   */
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
   * Método que devuelve la factura en formato PDF.
   * @returns Devuelve la factura en formato PDF.
   */
  to_pdf() {
    return `${this.vendedor}, ${this.comprador}, ${this.importe}, ${this.concepto}, ${this.fichero}, ${this.impuestos}, ${this.total}, ${this.fecha}`;
  }
}