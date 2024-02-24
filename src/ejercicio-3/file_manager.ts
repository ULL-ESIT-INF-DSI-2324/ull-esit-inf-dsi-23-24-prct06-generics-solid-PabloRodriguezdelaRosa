/**
 * Interfaz que define el comportamiento de un FileManager
 */
export interface FileManager {
  readFile(): string;
  writeFile(data: string): void;
}