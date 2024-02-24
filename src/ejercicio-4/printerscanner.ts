import { Printable } from './printable';
import { Scannable } from './scannable';

/**
 * Clase que representa una impresora y escáner.
 */
export class PrinterScanner implements Printable, Scannable {
  /**
   * Método que imprime.
   */
  print(): void {
    console.log('Printing...');
  }
  /**
   * Método que escanea.
   */
  scan(): void {
    console.log('Scanning...');
  }
}