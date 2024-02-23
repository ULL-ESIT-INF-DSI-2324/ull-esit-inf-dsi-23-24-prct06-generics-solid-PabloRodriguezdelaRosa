import 'mocha';
import { expect } from 'chai';
import { Mudanza } from '../../src/ejercicio-1/mudanza';
import { Herramientas } from '../../src/ejercicio-1/herramientas';
import { Mueble } from '../../src/ejercicio-1/mueble';
import { Enser } from '../../src/ejercicio-1/enser';
import { Ropa } from '../../src/ejercicio-1/ropa';
import { Electrodomestico } from '../../src/ejercicio-1/electrodomestico';
import { Caja } from '../../src/ejercicio-1/caja';

describe('Mudanza class', () => {
  const mudanza = new Mudanza<Enser>();
  it ('should create a new Mudanza object', () => {
    expect(mudanza).to.be.instanceOf(Mudanza);
  })
  const caja = new Caja<Enser>();
  const caja2 = new Caja<Enser>();
  it ('should add a Herramientas object to the Mudanza object', () => {
    caja.add_item(new Herramientas('martillo'));
    caja.add_item(new Herramientas('destornillador'));
    caja.add_item(new Herramientas('sierra'));
    caja.add_item(new Herramientas('taladro'));
    mudanza.add_caja(caja);
    expect(mudanza.get_cajas()).to.deep.equal([caja]);
  });
  it ('should add a Mueble object to the Mudanza object', () => {
    caja2.add_item(new Mueble('mesa'));
    caja2.add_item(new Mueble('silla'));
    caja2.add_item(new Mueble('sofa'));
    caja2.add_item(new Mueble('cama'));
    mudanza.add_caja(caja2);
    expect(mudanza.get_cajas()).to.deep.equal([caja, caja2]);
  });
  it ('should add a Ropa object to the Mudanza object', () => {
    mudanza.add_object_to_box(0, new Ropa('pantalones'));
    mudanza.add_object_to_box(0, new Ropa('camiseta'));
    mudanza.add_object_to_box(1, new Ropa('chaqueta'));
    mudanza.add_object_to_box(1, new Ropa('calcetines'));
    expect(mudanza.get_cajas()).to.deep.equal([caja, caja2]);
  });
  it ('should add a Electrodomestico object to the Mudanza object', () => {
    mudanza.add_object_to_box(0, new Electrodomestico('nevera'));
    mudanza.add_object_to_box(0, new Electrodomestico('lavadora'));
    mudanza.add_object_to_box(1, new Electrodomestico('lavavajillas'));
    mudanza.add_object_to_box(1, new Electrodomestico('horno'));
    expect(mudanza.get_cajas()).to.deep.equal([caja, caja2]);
  });
  it ('should show the objects from the first Caja', () => {
    mudanza.show_objects_from_box(0);
  });
  it ('should show the objects from the second Caja', () => {
    mudanza.show_objects_from_box(1);
  });
  it ('should delete a Ropa object from the first Caja', () => {
    mudanza.delete_object_from_box(0, new Ropa('pantalones'));
    expect(mudanza.find_object_from_box(0, 'pantalones')).to.be.true;
  });
  it ('should delete a Electrodomestico object from the second Caja', () => {
    mudanza.delete_object_from_box(1, new Electrodomestico('horno'));
    expect(mudanza.find_object_from_box(1, 'horno')).to.be.true;
  });
  it ('should find a Ropa object from the first Caja', () => {
    expect(mudanza.find_object_from_box(0, 'camiseta')).to.be.true;
  });
  it ('should find a Electrodomestico object from the second Caja', () => {
    expect(mudanza.find_object_from_box(1, 'lavavajillas')).to.be.true;
  });
  it ('should find a Mueble object from the second Caja', () => {
    expect(mudanza.find_object_from_box(1, 'mesa')).to.be.true;
  });
})