import { Enser } from "./enser";

/**
 * Clase Ropa
 * @implements Enser, interfaz que implementa la clase.
 * @param nombre, nombre de la ropa.
 * @method get_nombre, devuelve el nombre de la ropa.
 */
export class Ropa implements Enser {
  nombre: string;
  constructor(nombre: string) {
    this.nombre = nombre;
  }
  /**
   * Getter del nombre de la ropa.
   * @returns Devuelve el nombre de la ropa.
   */
  get_nombre() {
    return this.nombre;
  }
}