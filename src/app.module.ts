import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebzService } from './webz/webz.service';
import { WebZController } from './webz/webz.controller';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController, WebZController, UserController],
  providers: [AppService, WebzService, UserService, PrismaService],
})
export class AppModule {}
