import { Enser } from "./enser";

export class Ropa implements Enser {
  nombre: string;
  constructor(nombre: string) {
    this.nombre = nombre;
  }
  get_nombre() {
    return this.nombre;
  }
}