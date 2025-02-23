import { Injectable } from '@nestjs/common';
import { Thread as ThreadModel } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ThreadService {
  constructor(private prisma: PrismaService) {}

  // Create a Thread
  async create(createThread: ThreadModel) {
    return this.prisma.thread.create({
      data: createThread,
    });
  }

  // Get All Threads
  async findAll() {
    return this.prisma.thread.findMany();
  }
}
