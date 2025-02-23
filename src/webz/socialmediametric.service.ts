import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { SocialMediaMetric as SocialMediaMetricModel } from '@prisma/client';

@Injectable()
export class SocialMediaMetricService {
  constructor(private prisma: PrismaService) {}

  // Create a Metric
  async create(createMetric: SocialMediaMetricModel) {
    return this.prisma.socialMediaMetric.create({
      data: createMetric,
    });
  }
}
