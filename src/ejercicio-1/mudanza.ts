import { Enser } from './enser';
import { Caja } from './caja';

/**
 * Clase Mudanza
 * @template T, tipo de dato que puede contener la mudanza.
 * @param cajas, array que contiene las cajas de la mudanza.
 * @method add_caja, añade una caja a la mudanza.
 * @method get_cajas, devuelve las cajas de la mudanza.
 * @method add_object_to_box, añade un objeto a una caja.
 * @method delete_object_from_box, elimina un objeto de una caja.
 * @method show_objects_from_box, muestra los objetos de una caja.
 * @method find_object_from_box, busca un objeto en una caja.
 */
export class Mudanza<T extends Enser> {
  cajas: Caja<T>[] = [];
  constructor() {
  }
  /**
   * Añade una caja a la mudanza.
   * @param caja: Caja<T>
   */
  add_caja(caja: Caja<T>) {
    this.cajas.push(caja);
  }
  /**
   * Devuelve las cajas de la mudanza.
   * @returns Devuelve las cajas de la mudanza.
   */
  get_cajas() {
    return this.cajas;
  }
  /**
   * Añade un objeto a una caja.
   * @param indice_caja: number
   * @param objeto: T
   */
  add_object_to_box(indice_caja: number, objeto: T) {
    this.cajas[indice_caja].add_item(objeto);
  }
  /**
   * Elimina un objeto de una caja.
   * @param indice_caja: number
   * @param objeto: T
   */
  delete_object_from_box(indice_caja: number, objeto: T) {
    this.cajas[indice_caja].delete_item(objeto);
  }
  /**
   * Muestra los objetos de una caja.
   * @param indice_caja: number
   */
  show_objects_from_box(indice_caja: number) {
    this.cajas[indice_caja].show_items();
  }
  /**
   * Busca un objeto en una caja.
   * @param indice_caja: number
   * @param nombre: string
   * @returns Devuelve el objeto si lo encuentra, null en caso contrario.
   */
  find_object_from_box(indice_caja: number, nombre: string) {
    return this.cajas[indice_caja].find_item(nombre);
  }
}

