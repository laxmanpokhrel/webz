import { Controller, Get } from '@nestjs/common';
import { WebzService } from './webz.service';

@Controller('webz')
export class WebZController {
  constructor(private readonly webzService: WebzService) {}

  @Get('/init')
  importDatabase() {
    // return 'This is it';
    return this.webzService.importDatabase();
  }
}
