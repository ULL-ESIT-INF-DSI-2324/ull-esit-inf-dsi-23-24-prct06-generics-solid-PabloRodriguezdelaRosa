import { NotificationService } from "./notificationservice";

/**
 * Clase Notifier
 */
export class Notifier {
  constructor(private notificationService: NotificationService) {}
  /**
   * Método para enviar notificación.
   * @param message: string, mensaje a enviar.
   */
  notify(message: string): void {
    this.notificationService.notify(message);
  }
}