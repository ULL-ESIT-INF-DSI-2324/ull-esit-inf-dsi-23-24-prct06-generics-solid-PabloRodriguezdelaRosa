import 'mocha';
import { expect } from 'chai';
import { FilesReaderWritter } from '../../src/ejercicio-3/files_reader_writter';

describe('Tests que comprueban el funcionamiento de las clases FilesReaderWritter, FileImplementation y la interfaz FileManager', () => {
  const fileManager = new FilesReaderWritter('example.txt')
  it('Se comprueba que el método readFile de la clase FilesReaderWritter devuelve el contenido del archivo', () => {
    const currentContent = fileManager.readFile();
    expect(currentContent).to.equal('This is the content of the file.');
  });
  it('Se comprueba que el método writeFile de la clase FilesReaderWritter escribe el contenido en el archivo', () => {
    const newData = 'This is new content to be written into the file.'
    fileManager.writeFile(newData);
    const updatedContent = fileManager.readFile();
    expect(updatedContent).to.equal(newData);
  });
});