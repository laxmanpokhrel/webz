import { Controller, Get, Param, Response } from '@nestjs/common';
import { WebzService } from './webz.service';
import { Response as ExpResponse } from 'express';

@Controller('webz')
export class WebZController {
  constructor(private readonly webzService: WebzService) {}

  @Get('/:parameter')
  getWebz(
    @Param('parameter') parameter: string,
    @Response() response: ExpResponse,
  ): ExpResponse {
    return this.webzService.getWebz(parameter, response);
  }

  @Get()
  getAllWebz(): string {
    return this.webzService.getAllWebz();
  }
}
