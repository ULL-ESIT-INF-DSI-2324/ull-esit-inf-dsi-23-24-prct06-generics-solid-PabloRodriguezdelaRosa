import { Enser } from './enser';
/**
 * Clase Electrodomestico
 * @implements Enser, interfaz que implementa la clase.
 * @param nombre, nombre del electrodomestico.
 * @method get_nombre, devuelve el nombre del electrodomestico.
 */
export class Electrodomestico implements Enser {
  nombre: string;
  constructor(nombre: string) {
    this.nombre = nombre;
  }
  /**
   * Getter del nombre del electrodomestico.
   * @returns Devuelve el nombre del electrodomestico.
   */
  get_nombre() {
    return this.nombre;
  }
}
