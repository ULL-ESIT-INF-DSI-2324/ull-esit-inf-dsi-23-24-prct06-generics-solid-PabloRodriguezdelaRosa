import 'mocha';
import { expect } from 'chai';
import { Facturacion } from '../../src/ejercicio-2/facturacion';
import { Html } from '../../src/ejercicio-2/html';
import { Pdf } from '../../src/ejercicio-2/pdf';

describe('Facturacion class', () => {
    const facturacion = new Facturacion();
    it('should create a new Facturacion object', () => {
        expect(facturacion).to.be.instanceOf(Facturacion);
    });
    const html = new Html('mercadona', 'Pablo', 20.89, "compra", 1.11, 22, "2021-05-12")
    it('should return the name of the factura', () => {
        facturacion.add_factura(html);
        expect(facturacion.get_facturas().length).to.equal(1);
    });
    const pdf = new Pdf('mercadona', 'Pablo', 20.89, "compra", 1.11, 22, "2021-05-12")
    it('should create a new Facturacion object and return the name of the factura', () => {
        facturacion.add_factura(pdf);
        expect(facturacion.get_facturas().length).to.equal(2);
    });
    it ('should delete a factura', () => {
        facturacion.delete_factura(html);
        expect(facturacion.get_facturas().length).to.equal(1);
    })
    it ('should show the facturas', () => {
        console.log(facturacion.show_facturas());
    });
});