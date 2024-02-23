import 'mocha';
import { expect } from 'chai';
import { Mueble } from '../../src/ejercicio-1/mueble';

describe('Mueble class', () => {
  it('should create a new Mueble object', () => {
    const mueble = new Mueble('mesa');
    expect(mueble).to.be.instanceOf(Mueble);
  });
  it ('should return the name of the mueble', () => {
    const mueble = new Mueble('mesa');
    expect(mueble.get_nombre()).to.equal('mesa');
  });
  it ('should create a new Mueble object and return the name of the mueble', () => {
    const mueble = new Mueble('silla');
    expect(mueble).to.be.instanceOf(Mueble);
    expect(mueble.get_nombre()).to.equal('silla');
  });
  it ('should create a new Mueble object and return the name of the mueble', () => {
    const mueble = new Mueble('sofa');
    expect(mueble).to.be.instanceOf(Mueble);
    expect(mueble.get_nombre()).to.equal('sofa');
  })
  it ('should create a new Mueble object and return the name of the mueble', () => {
    const mueble = new Mueble('armario');
    expect(mueble).to.be.instanceOf(Mueble);
    expect(mueble.get_nombre()).to.equal('armario');
  });
  it ('should create a new Mueble object and return the name of the mueble', () => {
    const mueble = new Mueble('estanteria');
    expect(mueble).to.be.instanceOf(Mueble);
    expect(mueble.get_nombre()).to.equal('estanteria');
  });
});