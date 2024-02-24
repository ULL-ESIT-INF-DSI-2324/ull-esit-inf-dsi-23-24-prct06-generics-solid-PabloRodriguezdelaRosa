import { Enser } from './enser';

/**
 * Clase Caja
 * @template T, tipo de dato que puede contener la caja.
 * @param contenido, array que contiene los elementos de la caja.
 * @method add_item, añade un elemento a la caja.
 * @method delete_item, elimina un elemento de la caja.
 * @method show_items, muestra los elementos de la caja.
 * @method find_item, busca un elemento en la caja.
 */
export class Caja<T extends Enser> {
  private contenido: T[];
  /**
   * Constructor de la clase.
   */
  constructor() {
    this.contenido = [];
  }
  /**
   * Añade un elemento a la caja.
   * @param item Elemento a añadir a la caja.
   */
  add_item(item: T) {
    this.contenido.push(item);
  }
  /**
   * Elimina un elemento de la caja.
   * @param item Elemento a eliminar de la caja.
   */
  delete_item(item: T) {
    this.contenido = this.contenido.filter((i) => i !== item);
  }
  /**
   * Muestra los elementos de la caja.
   */
  show_items() :void {
    this.contenido.forEach((i) => {
      console.log(i.nombre);
    });
  }
  /**
   * Busca un elemento en la caja.
   * @param item Elemento a buscar en la caja.
   * @returns Devuelve true si el elemento está en la caja, false en caso contrario.
   */
  find_item(item: string) :boolean {
    for (const i of this.contenido) {
      if (i.nombre === item) {
        return true;
      }
    }
    return false;
  }
}

