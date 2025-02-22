/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class WebzService {
  constructor(private readonly httpService: HttpService) {}

  private readonly logger = new Logger(WebzService.name, { timestamp: true });

  async importDatabase() {
    try {
      const response = await firstValueFrom<Record<string, any>>(
        // this.httpService.get('https://admin.naxa.com.np/api/blog?no_page=true'),
        this.httpService.get(
          'https://api.webz.io/newsApiLite?token=3eb4d06f-315a-4481-b357-616444fc4e73',
        ),
      );
      // const response = await fetch(
      //   'https://admin.naxa.com.np/api/blog?no_page=true',
      // );
      const jsonData: Record<string, any> = response?.data;
      console.log('🚀 ~ WebzService ~ importFromApi ~ response:', jsonData);
      return jsonData[0];
    } catch (error: any) {
      this.logger.error(error?.message || 'Error fetching webz!', {
        timeStamp: true,
      });
    }
  }
}
