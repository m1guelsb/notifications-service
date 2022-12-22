import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { SendNotification } from 'src/notification/application/use-cases/send-notification';
import { NotificationsController } from './kafka/controllers/notifications.controller';
import { KafkaConsumerService } from './kafka/kafka.consumer.service';

@Module({
  imports: [DatabaseModule],
  providers: [KafkaConsumerService, SendNotification],
  controllers: [NotificationsController],
})
export class MessagingModule {}
