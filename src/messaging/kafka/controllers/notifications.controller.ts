import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { SendNotification } from 'src/notification/application/use-cases/send-notification';

interface handleSendNotificationPayload {
  content: string;
  category: string;
  recipientId: string;
}

@Controller()
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {}

  @EventPattern('notifications.send-notification')
  async handleSendNotification(
    @Payload() notification: handleSendNotificationPayload,
  ) {
    await this.sendNotification.execute(notification);
    console.log({ notification });
  }
}
