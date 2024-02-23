import 'mocha';
import { expect } from 'chai';
import { Herramientas } from '../../src/ejercicio-1/herramientas';

describe('Herramientas class', () => {
  it('should create a new Herramientas object', () => {
    const herramienta = new Herramientas('martillo');
    expect(herramienta).to.be.instanceOf(Herramientas);
  });
  it ('should return the name of the herramienta', () => {
    const herramienta = new Herramientas('martillo');
    expect(herramienta.get_nombre()).to.equal('martillo');
  });
  it ('should create a new Herramientas object and return the name of the herramienta', () => {
    const herramienta = new Herramientas('destornillador');
    expect(herramienta.get_nombre()).to.equal('destornillador');
  });
  it ('should create a new Herramientas object and return the name of the herramienta', () => {
    const herramienta = new Herramientas('sierra');
    expect(herramienta.get_nombre()).to.equal('sierra');
  })
  it ('should create a new Herramientas object and return the name of the herramienta', () => {
    const herramienta = new Herramientas('taladro');
    expect(herramienta.get_nombre()).to.equal('taladro');
  });
  it ('should create a new Herramientas object and return the name of the herramienta', () => {
    const herramienta = new Herramientas('llave');
    expect(herramienta.get_nombre()).to.equal('llave');
  });
});