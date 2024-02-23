import 'mocha';
import { expect } from 'chai';
import { Caja } from '../../src/ejercicio-1/caja';
import { Enser } from '../../src/ejercicio-1/enser';
import { Herramientas } from '../../src/ejercicio-1/herramientas';
import { Ropa } from '../../src/ejercicio-1/ropa';
import { Electrodomestico } from '../../src/ejercicio-1/electrodomestico';
import { Mueble } from '../../src/ejercicio-1/mueble';

describe('Caja class', () => {
  const caja = new Caja<Enser>();
  it('should create a new Caja object', () => {
    expect(caja).to.be.instanceOf(Caja);
  });
  const herramienta = new Herramientas('martillo');
  const ropa = new Ropa('pantalones');
  const electrodomestico = new Electrodomestico('nevera');
  const mueble = new Mueble('mesa');
  it ('should add a Herramientas object to the Caja object', () => {
    caja.add_item(herramienta)
    expect(caja.find_item(herramienta.get_nombre())).to.be.true;
  });
  it ('should add a Ropa object to the Caja object', () => {
    caja.add_item(ropa);
    expect(caja.find_item(ropa.get_nombre())).to.be.true;
  });
  it ('should add a Electrodomestico object to the Caja object', () => {
    caja.add_item(electrodomestico);
    expect(caja.find_item(electrodomestico.get_nombre())).to.be.true;
  });
  it ('should add a Mueble object to the Caja object', () => {
    caja.add_item(mueble);
    expect(caja.find_item(mueble.get_nombre())).to.be.true;
  });
  it ('should delete a Herramientas object from the Caja object', () => {
    caja.delete_item(herramienta);
    expect(caja.find_item(herramienta.get_nombre())).to.be.false;
  });
  it ('should delete a Ropa object from the Caja object', () => {
    caja.delete_item(ropa);
    expect(caja.find_item(ropa.get_nombre())).to.be.false;
  });
  it ('should delete a Electrodomestico object from the Caja object', () => {
    caja.delete_item(electrodomestico);
    expect(caja.find_item(electrodomestico.get_nombre())).to.be.false;
  });
  it ('should delete a Mueble object from the Caja object', () => {
    caja.delete_item(mueble);
    expect(caja.find_item(mueble.get_nombre())).to.be.false;
  });
});