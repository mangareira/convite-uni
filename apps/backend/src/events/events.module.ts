import { Module } from '@nestjs/common';
import { EventsController } from './events.controller';
import { DbModule } from 'src/db/db.module';
import { EventPrisma } from './event.prisma';

@Module({
  imports: [DbModule],
  controllers: [EventsController],
  providers: [EventPrisma],
})
export class EventsModule {}
