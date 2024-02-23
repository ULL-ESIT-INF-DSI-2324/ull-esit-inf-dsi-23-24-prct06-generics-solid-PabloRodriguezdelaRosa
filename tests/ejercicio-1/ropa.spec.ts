import 'mocha';
import { expect } from 'chai';
import { Ropa } from '../../src/ejercicio-1/ropa';

describe('Ropa class', () => {
  it('should create a new Ropa object', () => {
    const ropa = new Ropa('pantalones');
    expect(ropa).to.be.instanceOf(Ropa);
  });
  it ('should return the name of the ropa', () => {
    const ropa = new Ropa('pantalones');
    expect(ropa.get_nombre()).to.equal('pantalones');
  });
  it ('should create a new Ropa object and return the name of the ropa', () => {
    const ropa = new Ropa('bermudas');
    expect(ropa.get_nombre()).to.equal('bermudas');
  });
  it ('should create a new Ropa object and return the name of the ropa', () => {
    const ropa = new Ropa('camiseta');
    expect(ropa.get_nombre()).to.equal('camiseta');
  })
  it ('should create a new Ropa object and return the name of the ropa', () => {
    const ropa = new Ropa('chaqueta');
    expect(ropa.get_nombre()).to.equal('chaqueta');
  });
  it ('should create a new Ropa object and return the name of the ropa', () => {
    const ropa = new Ropa('falda');
    expect(ropa.get_nombre()).to.equal('falda');
  });
});
