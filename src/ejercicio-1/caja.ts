import { Enser } from './enser';

export class Caja<T extends Enser> {
  private contenido: T[];
  constructor() {
    this.contenido = [];
  }
  add_item(item: T) {
    this.contenido.push(item);
  }
  delete_item(item: T) {
    this.contenido = this.contenido.filter((i) => i !== item);
  }
  show_items() :void {
    this.contenido.forEach((i) => {
      console.log(i.nombre);
    });
  }
  find_item(item: string) :boolean {
    for (const i of this.contenido) {
      if (i.nombre === item) {
        return true;
      }
    }
    return false;
  }
}

