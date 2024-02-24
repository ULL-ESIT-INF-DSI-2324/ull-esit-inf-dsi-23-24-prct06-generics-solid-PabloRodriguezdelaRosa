import { Printable } from "./printable";

/**
 * Clase que representa una impresora.
 */
export class Printer implements Printable {
  /**
   * Método que imprime.
   */
  print(): void {
    console.log("Printing...");
  }
}