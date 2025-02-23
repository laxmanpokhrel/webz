/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { EntityService } from './entity.service';
import { PostService } from './post.service';
import { SocialMediaMetricService } from './socialmediametric.service';
import { ThreadService } from './thread.service';
import { firstValueFrom } from 'rxjs';

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
    const uuids = [];
    try {
      let postCount = 0;
      let response;
      let url = `${process.env.WEBZ_API}/newsApiLite?token=${process.env.WEBZ_TOKEN}&q=Bitcoin&`;
      do {
        response = await firstValueFrom<Record<string, any>>(
          this.httpService.get(url),
        );
        postCount += response.data?.posts?.length;
        this.logger.log(`Fetched posts count: ${postCount}`);

        this.logger.log(`Fetched url: ${url}`);
        this.logger.log(`Fetched next: ${response?.data?.next}`);
        url = `${process.env.WEBZ_API}${response?.data?.next}`;
        // continue;
        // const response = await fetch(
        //   'https://admin.naxa.com.np/api/blog?no_page=true',
        // );
        // return 'Boom';

        const { posts } = response.data;
        const postPromises = posts?.map(async (post) => {
          const { thread, entities, ...restPost } = post;

          // console.log('restPost-----', restPost?.uuid, restPost.title);
          // Create Post
          const createdPost = await this.post.create(restPost);

          const { social, ...restThread } = thread;

          // 1. create thread
          const createdThread = await this.thread.create(restThread);

          const { updated, ...restMetric } = social;
          // Create SocialMediaMetric
          await Promise.all(
            Object.entries(restMetric).map(async ([platform, metric]) => {
              await Promise.all(
                // @ts-expect-error - nn
                Object.entries(metric).map(
                  async ([metricType, metricCount]) => {
                    const createMetric = await this.socialMediaMetric.create({
                      social_media: platform,
                      metric_type: metricType,
                      // @ts-expect-error - nn
                      count: metricCount,
                      updated,
                      threadUuid: createdThread.id,
                    });

                    return createMetric;
                  },
                ),
              );
            }),
          );

          // Create Entity
          await Promise.all(
            Object.entries(entities).map(
              async ([entity_type, entity_value]) => {
                return await Promise.all(
                  // @ts-expect-error - nn
                  entity_value?.map(async (value) => {
                    // @ts-expect-error - nn
                    return await this.entity.create({
                      entity_type,
                      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                      entity_name: value.name,
                      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                      entity_sentiment: value.sentiment,
                      post_id: createdPost.id,
                    });
                  }),
                );
              },
            ),
          );
        });
        await Promise.all(postPromises);
      } while (postCount < 200 && response?.data?.next);

      return postCount;
    } catch (error: any) {
      // console.log('🚀 ~ WebzService ~ importDatabase ~ error:', error);
      this.logger.error(
        `From Error ${error?.message}.` || 'Error fetching webz!',
        {
          timeStamp: true,
        },
      );
    }
  }
}
