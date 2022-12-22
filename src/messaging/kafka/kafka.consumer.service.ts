import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['sure-barnacle-13736-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'c3VyZS1iYXJuYWNsZS0xMzczNiSXw6rhAP8Mzk19-u9vPJ0aDRxnMIyHiKaXIxE',
          password: '85f8e71e2b934999b49dad3645fa9d35',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
