/**
 * Interfaz que representa una factura
 */
export interface Factura {
  vendedor: string;
  comprador: string;
  importe: number;
  concepto: string;
  fichero: string;
  impuestos: number;
  total: number;
  fecha: string;
}