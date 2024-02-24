import 'mocha';
import { expect } from 'chai';
import { Html } from '../../src/ejercicio-2/html';

describe('Html class', () => {
    const html = new Html('mercadona', 'Pablo', 20.89, "compra", 1.11, 22, "2021-05-12");
    it('should create a new Html object', () => {
        expect(html).to.be.instanceOf(Html);
    });
    it ('Deberia retornar el vendedor', () => {
        expect(html.get_vendedor()).to.equal('mercadona');
    });
    it ('Deberia retornar el comprador', () => {
        expect(html.get_comprador()).to.equal('Pablo');
    });
    it ('Deberia retornar el precio', () => {
        expect(html.get_importe()).to.equal(20.89);
    });
    it ('Deberia retornar el tipo', () => {
        expect(html.get_fichero()).to.equal('Html');
    });
    it('Deberia retornar el concepto', () => {
        expect(html.get_concepto()).to.equal('compra');
    })
    it ('Deberia retornar el impuesto', () => {
        expect(html.get_impuestos()).to.equal(1.11);
    });
    it ('Deberia retornar el total', () => {
        expect(html.get_total()).to.equal(22);
    });
    it ('Deberia retornar la fecha', () => {
        expect(html.get_fecha()).to.equal('2021-05-12');
    });
    it ('Se muestra el mensaje', () => {
        console.log(html.to_html());
    });
});
