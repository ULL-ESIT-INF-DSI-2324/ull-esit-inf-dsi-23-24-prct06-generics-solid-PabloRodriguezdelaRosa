import * as fs from 'fs';
import { FileManager } from './file_manager';

/**
 * Clase que se encarga de leer y escribir archivos.
 */
export class FileImplementation implements FileManager {
  constructor(private filePath: string) {}
  /**
   * Método que se encarga de leer el archivo.	 
   * @returns Contenido del archivo.
   */
  public readFile(): string {
    try {
      return fs.readFileSync(this.filePath, 'utf-8');
    } catch (error) {
      console.error('Error al leer el archivo:', (error as Error).message);
      return '';
    }
  }
  /**
   * Método que se encarga de escribir en el archivo.
   * @param data Datos a escribir en el archivo.
   */
  public writeFile(data: string): void {
    try {
      fs.writeFileSync(this.filePath, data, 'utf-8');
      console.log('Archivo escrito exitosamente.');
    } catch (error) {
      console.error('Error al escribir en el archivo:', (error as Error).message);
    }
  }
}
