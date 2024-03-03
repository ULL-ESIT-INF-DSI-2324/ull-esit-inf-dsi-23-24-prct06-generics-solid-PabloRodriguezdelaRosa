import 'mocha';
import { expect } from 'chai';
import { PrinterScanner } from '../../src/ejercicio-4/printerscanner';
import { Printer } from '../../src/ejercicio-4/printer';
import { Scanner } from '../../src/ejercicio-4/scanner';

describe('tests que comprueban el funcionamiento de la clase PrinterScanner', () => {
  const printerScanner = new PrinterScanner();
  it('Se comprueba que el método print de la clase PrinterScanner imprime', () => {
    expect(printerScanner.print());
  });
  it('Se comprueba que el método scan de la clase PrinterScanner escanea', () => {
    expect(printerScanner.scan());
  });
});
describe('tests que comprueban el funcionamiento de las clases Printer y Scanner', () => {
  it('Se comprueba que el método print de la clase Printer imprime', () => {
    const printer = new Printer();
    expect(printer.print());
  });
  it('Se comprueba que el método scan de la clase Scanner escanea', () => {
    const scanner = new Scanner();
    expect(scanner.scan());
  });
});