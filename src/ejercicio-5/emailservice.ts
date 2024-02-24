import { NotificationService } from "./notificationservice";

/**
 * Clase EmailService
 */
export class EmailService implements NotificationService {
  /**
   * Método para enviar notificación por email.
   * @param message: string, mensaje a enviar. 
   */
  notify(message: string): void {
    console.log(`Sending notification by email: ${message}`);
  }
}