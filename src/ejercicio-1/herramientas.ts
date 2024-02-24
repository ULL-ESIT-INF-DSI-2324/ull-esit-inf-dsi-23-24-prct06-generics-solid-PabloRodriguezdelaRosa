import { Enser } from "./enser";

/**
 * Clase Herramientas
 * @implements Enser, interfaz que implementa la clase.
 * @param nombre, nombre de la herramienta.
 */
export class Herramientas implements Enser {
  nombre: string;
  constructor(nombre: string) {
    this.nombre = nombre;
  }
  /**
   * Getter del nombre de la herramienta.
   * @returns Devuelve el nombre de la herramienta.
   */
  get_nombre() {
    return this.nombre;
  }
}