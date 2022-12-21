import { Body, Controller, Post } from '@nestjs/common';
import { SendNotification } from 'src/notification/application/use-cases/send-notification';
import { CreateNotificationDto } from '../dtos/create-notification.dto';

@Controller('notifications')
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {}

  @Post()
  async createNotification(@Body() notificationDto: CreateNotificationDto) {
    const { content, category, recipientId } = notificationDto;

    const { notification } = await this.sendNotification.execute({
      content,
      category,
      recipientId,
    });

    return { notification };
  }
}
