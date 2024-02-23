import { Enser } from './enser';
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

