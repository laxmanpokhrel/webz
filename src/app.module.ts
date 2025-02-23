import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebzService } from './webz/webz.service';
import { WebZController } from './webz/webz.controller';
import { PrismaService } from './prisma.service';
import { SocialMediaMetricService } from './webz/socialmediametric.service';
import { PostService } from './webz/post.service';
import { ThreadService } from './webz/thread.service';
import { EntityService } from './webz/entity.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController, WebZController],
  providers: [
    AppService,
    WebzService,
    SocialMediaMetricService,
    PostService,
    PrismaService,
    ThreadService,
    EntityService,
  ],
})
export class AppModule {}
