import { NotificationService } from "./notificationservice";

/**
 * Class ShortMessageService
 */
export class ShortMessageService implements NotificationService {
  /**
   * Método para enviar notificación por SMS.
   * @param message: string, mensaje a enviar. 
   */
  notify(message: string): void {
    console.log(`Sending notification by SMS: ${message}`);
  }
}