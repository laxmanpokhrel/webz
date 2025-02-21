import { Injectable } from '@nestjs/common';
import { Response } from 'express';

@Injectable()
export class WebzService {
  getWebz(param: string, res: Response): Response {
    return res.status(200).json({ message: param });
  }

  getAllWebz(): string {
    return 'webz All service';
  }
}
