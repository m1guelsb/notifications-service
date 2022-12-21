import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { Notification } from '../../application/entities/notification';
import { NotificationRepository } from '../../application/repositories/notification-repository';

@Injectable()
export class PrismaNotificationsRepository implements NotificationRepository {
  constructor(private prisma: PrismaService) {}

  async createNotification(notification: Notification): Promise<void> {
    await this.prisma.notification.create({
      data: {
        id: notification.id,
        category: notification.category,
        content: notification.content.value,
        recipientId: notification.recipientId,
        readAt: notification.readAt,
        createdAt: notification.createdAt,
      },
    });
  }
}
