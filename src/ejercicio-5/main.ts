import { EmailService } from './emailservice';
import { ShortMessageService } from './shortmessageservice';
import { Notifier } from './notifier';

// Código del cliente
const emailNotifier = new Notifier(new EmailService());
emailNotifier.notify('Hello World!');

const shortMessageNotifier = new Notifier(new ShortMessageService());
shortMessageNotifier.notify('Hello World!');