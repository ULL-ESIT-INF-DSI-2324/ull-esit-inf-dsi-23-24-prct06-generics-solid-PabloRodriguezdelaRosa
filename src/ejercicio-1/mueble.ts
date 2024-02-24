import { Enser } from './enser';
/**
 * Clase Mueble
 */
export class Mueble implements Enser {
  nombre: string;
  constructor(nombre: string) {
    this.nombre = nombre;
  }
  /**
   * Getter del nombre del mueble.
   * @returns Devuelve el nombre del mueble.
   */
  get_nombre() {
    return this.nombre;
  }
}