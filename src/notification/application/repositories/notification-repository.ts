import { Notification } from '../entities/notification';

export abstract class NotificationRepository {
  abstract createNotification(notification: Notification): Promise<void>;
}
