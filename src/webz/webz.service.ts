/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { firstValueFrom } from 'rxjs';
import { getMetricRows, getPostEntitiesRows, IGetMetricRows } from 'src/utils';
import { PostDto } from './dto/post.dto';
import { EntityService } from './entity.service';
import { PostService } from './post.service';
import { SocialMediaMetricService } from './socialmediametric.service';
import { ThreadService } from './thread.service';

interface IResponseData {
  posts: PostDto[];
  totalResults: number;
  moreResultsAvailable: number;
  next: string;
  requestsLeft: number;
  warnings: null | string;
}

@Injectable()
export class WebzService {
  constructor(
    private readonly httpService: HttpService,
    private thread: ThreadService,
    private socialMediaMetric: SocialMediaMetricService,
    private post: PostService,
    private entity: EntityService,
  ) {}

  private readonly logger = new Logger(WebzService.name, { timestamp: true });

  async importDatabase() {
    try {
      let postCount = 0;
      let response: AxiosResponse<IResponseData>;
      let url = `${process.env.WEBZ_API}/newsApiLite?token=${process.env.WEBZ_TOKEN}&q=Bitcoin&`;
      do {
        response = await firstValueFrom(
          this.httpService.get<IResponseData>(url),
        );

        postCount += response.data?.posts.length;

        this.logger.log(`Fetched posts count: ${postCount}`);

        url = `${process.env.WEBZ_API}${response?.data?.next}`;

        const { posts } = response.data;
        const postPromises = posts?.map(async (post) => {
          const { thread, entities, ...restPost } = post;

          // 1. Create Post
          const createdPost = await this.post.create(restPost);

          const { social, ...restThread } = thread;

          // 2. create thread
          const createdThread = await this.thread.create(restThread);

          // 3. Create Social Media Metric
          const { updated, ...restMetric } = social;

          const metricRows = getMetricRows(
            restMetric as IGetMetricRows,
            updated as string,
            createdThread?.id,
          );

          await Promise.all(
            metricRows.map(async (metricRow) => {
              await this.socialMediaMetric.create(metricRow);
            }),
          );

          // 4. Create Entity
          const entitiesRows = getPostEntitiesRows(entities, createdPost.id);
          await Promise.all(
            entitiesRows.map(async (entitiesRow) => {
              await this.entity.create(entitiesRow);
            }),
          );
        });
        await Promise.all(postPromises);
      } while (postCount < 200 && response?.data?.next);
      this.logger.log('Success');

      return postCount;
    } catch (error: any) {
      this.logger.error(`From Error ${error?.message}.`, {
        timeStamp: true,
      });
    }
  }
}
