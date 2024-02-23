import { Enser } from './enser';
import { Electrodomestico } from './electrodomestico';
import { Herramientas } from './herramientas';
import { Mueble } from './mueble';
import { Ropa } from './ropa';
import { Caja } from './caja';

export class Mudanza<T extends Enser> {
  cajas: Caja<T>[] = [];
  constructor() {
  }
  add_caja(caja: Caja<T>) {
    this.cajas.push(caja);
  }
  get_cajas() {
    return this.cajas;
  }
  add_object_to_box(indice_caja: number, objeto: T) {
    this.cajas[indice_caja].add_item(objeto);
  }
  delete_object_from_box(indice_caja: number, objeto: T) {
    this.cajas[indice_caja].delete_item(objeto);
  }
  show_objects_from_box(indice_caja: number) {
    this.cajas[indice_caja].show_items();
  }
  find_object_from_box(indice_caja: number, nombre: string) {
    return this.cajas[indice_caja].find_item(nombre);
  }
}

let mudanza = new Mudanza<Enser>();
let caja = new Caja<Enser>();
let caja2 = new Caja<Enser>();
let electrodomestico = new Electrodomestico('nevera');
let herramientas = new Herramientas('martillo');
let mueble = new Mueble('mesa');
let ropa = new Ropa('pantalones');
mudanza.add_caja(caja);
mudanza.add_caja(caja2);
mudanza.add_object_to_box(0, electrodomestico);
mudanza.add_object_to_box(0, herramientas);
mudanza.add_object_to_box(1, mueble);
mudanza.add_object_to_box(1, ropa);
console.log(mudanza.get_cajas());
mudanza.show_objects_from_box(0);
mudanza.show_objects_from_box(1);
mudanza.delete_object_from_box(0, electrodomestico);
mudanza.delete_object_from_box(1, ropa);
console.log(mudanza.get_cajas());
console.log(mudanza.find_object_from_box(0, electrodomestico.get_nombre()));
console.log(mudanza.find_object_from_box(1, ropa.get_nombre()));
console.log(mudanza.find_object_from_box(1, mueble.get_nombre()));
console.log(mudanza.find_object_from_box(0, ropa.get_nombre()));
console.log(mudanza.find_object_from_box(1, electrodomestico.get_nombre()));
console.log(mudanza.find_object_from_box(0, mueble.get_nombre()));
console.log(mudanza.find_object_from_box(0, 'martillo'));
console.log(mudanza.find_object_from_box(0, herramientas.get_nombre()));
