import 'mocha';
import { expect } from 'chai';
import { Notifier } from '../../src/ejercicio-5/notifier';
import { EmailService } from '../../src/ejercicio-5/emailservice';
import { ShortMessageService } from '../../src/ejercicio-5/shortmessageservice';

describe('Tests que comprueban el funcionamiento de la clase Notifier', () => {
  const notifier_1 = new Notifier(new EmailService());
  it('Se comprueba que el método notify de la clase Notifier envía notificación por email', () => {
    expect(notifier_1.notify('This is a test message'));
  });
    const notifier = new Notifier(new ShortMessageService());
  it('Se comprueba que el método notify de la clase Notifier envía notificación por mensaje corto', () => {
    expect(notifier.notify('This is a test message'));
  });
});