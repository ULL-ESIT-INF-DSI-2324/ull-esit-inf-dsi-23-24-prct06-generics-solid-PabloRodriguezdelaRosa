import { FileManager } from './file_manager';
import { FileImplementation } from './file_implementation';

/**
 * Clase que se encarga de leer y escribir archivos.
 */
export class FilesReaderWritter {
  private fileManager: FileManager;
  /**
   * Constructor de la clase.
   * @param filePath Ruta del archivo a leer o escribir.
   */
  constructor(private filePath: string) {
    this.fileManager = new FileImplementation(filePath);
  }
  /**
   * Método que se encarga de leer el archivo.
   * @returns Contenido del archivo.
   */
  public readFile(): string {
    return this.fileManager.readFile();
  }
  /**
   * Método que se encarga de escribir en el archivo.
   * @param data Datos a escribir en el archivo.
   */
  public writeFile(data: string): void {
    this.fileManager.writeFile(data);
  }
}