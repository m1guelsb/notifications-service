import { Notification } from '../../src/notification/application/entities/notification';
import { NotificationRepository } from '../../src/notification/application/repositories/notification-repository';

export class InMemoryNotificationRepository implements NotificationRepository {
  public notifications: Notification[] = [];

  async createNotification(notification: Notification) {
    this.notifications.push(notification);
  }
}
