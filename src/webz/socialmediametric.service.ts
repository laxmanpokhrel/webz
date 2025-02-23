import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateSocialMediaMetricDto } from './dto/socialmediametric.dto';

@Injectable()
export class SocialMediaMetricService {
  constructor(private prisma: PrismaService) {}

  // Create a Metric
  async create(createMetric: CreateSocialMediaMetricDto) {
    return this.prisma.socialMediaMetric.create({
      data: createMetric,
    });
  }
}
