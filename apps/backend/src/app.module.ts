import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { EventsModule } from './events/events.module';
import { DbModule } from './db/db.module';

@Module({
  imports: [EventsModule, DbModule],
  controllers: [AppController],
})
export class AppModule {}
