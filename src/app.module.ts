import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebzService } from './webz.service';
import { WebZController } from './webz.controller';

@Module({
  imports: [],
  controllers: [AppController, WebZController],
  providers: [AppService, WebzService],
})
export class AppModule {}
