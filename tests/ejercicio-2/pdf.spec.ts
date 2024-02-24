import 'mocha';
import { expect } from 'chai';
import { Pdf } from '../../src/ejercicio-2/pdf';

describe('PDF class', () => {
    const pdf = new Pdf('mercadona', 'Pablo', 20.89, "compra", 1.11, 22, "2021-05-12");
    it('should create a new PDF object', () => {
        expect(pdf).to.be.instanceOf(Pdf);
    });
    it ('Deberia retornar el vendedor', () => {
        expect(pdf.get_vendedor()).to.equal('mercadona');
    });
    it ('Deberia retornar el comprador', () => {
        expect(pdf.get_comprador()).to.equal('Pablo');
    });
    it ('Deberia retornar el precio', () => {
        expect(pdf.get_importe()).to.equal(20.89);
    });
    it ('Deberia retornar el tipo', () => {
        expect(pdf.get_fichero()).to.equal('Pdf');
    });
    it('Deberia retornar el concepto', () => {
        expect(pdf.get_concepto()).to.equal('compra');
    })
    it ('Deberia retornar el impuesto', () => {
        expect(pdf.get_impuestos()).to.equal(1.11);
    });
    it ('Deberia retornar el total', () => {
        expect(pdf.get_total()).to.equal(22);
    });
    it ('Deberia retornar la fecha', () => {
        expect(pdf.get_fecha()).to.equal('2021-05-12');
    });
    it('Se muestra el mensaje', () => {
        console.log(pdf.to_pdf());
    });
});