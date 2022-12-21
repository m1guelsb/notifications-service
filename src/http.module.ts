import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { SendNotification } from 'src/notification/application/use-cases/send-notification';
import { NotificationsController } from './notification/infra/http/controllers/notifications.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [SendNotification],
})
export class HttpModule {}
