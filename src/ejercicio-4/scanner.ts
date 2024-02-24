import { Scannable } from "./scannable";

/**
 * Clase que representa un escáner.
 */
export class Scanner implements Scannable {
  /**
   * Método que escanea.
   */
  scan(): void {
    console.log("Scanning...");
  }
}
