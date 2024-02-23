import { Enser } from './enser';

export class Electrodomestico implements Enser {
  nombre: string;
  constructor(nombre: string) {
    this.nombre = nombre;
  }
  get_nombre() {
    return this.nombre;
  }
}
