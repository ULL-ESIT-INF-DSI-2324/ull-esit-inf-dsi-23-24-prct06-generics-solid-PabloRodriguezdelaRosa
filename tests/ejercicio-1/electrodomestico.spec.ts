import 'mocha';
import { expect } from 'chai';
import { Electrodomestico } from '../../src/ejercicio-1/electrodomestico';

describe('Electrodomestico class', () => {
  it ('should create a new Electrodomestico object', () => {
    const electrodomestico = new Electrodomestico('nevera');
    expect(electrodomestico).to.be.instanceOf(Electrodomestico);
  })
  it ('should return the name of the electrodomestico', () => {
    const electrodomestico = new Electrodomestico('nevera');
    expect(electrodomestico.get_nombre()).to.equal('nevera');
  });
  it ('should create a new Electrodomestico object and return the name of the electrodomestico', () => {
    const electrodomestico = new Electrodomestico('lavadora');
    expect(electrodomestico.get_nombre()).to.equal('lavadora');
  });
  it ('should create a new Electrodomestico object and return the name of the electrodomestico', () => {
    const electrodomestico = new Electrodomestico('secadora');
    expect(electrodomestico.get_nombre()).to.equal('secadora');
  });
  it ('should create a new Electrodomestico object and return the name of the electrodomestico', () => {
    const electrodomestico = new Electrodomestico('lavavajillas');
    expect(electrodomestico.get_nombre()).to.equal('lavavajillas');
  });
  it ('should create a new Electrodomestico object and return the name of the electrodomestico', () => {
    const electrodomestico = new Electrodomestico('horno');
    expect(electrodomestico.get_nombre()).to.equal('horno');
  });
});