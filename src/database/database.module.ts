import { Module } from '@nestjs/common';
import { NotificationRepository } from 'src/notification/application/repositories/notification-repository';
import { PrismaNotificationsRepository } from 'src/notification/infra/databases/prisma-notifications.repository';
import { PrismaService } from './prisma/prisma.service';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationRepository,
      useClass: PrismaNotificationsRepository,
    },
  ],
  exports: [NotificationRepository],
})
export class DatabaseModule {}
