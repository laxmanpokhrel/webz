import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateThreadDto } from './dto/thread.dto';

@Injectable()
export class ThreadService {
  constructor(private prisma: PrismaService) {}
  // Create a Thread
  async create(createThread: CreateThreadDto) {
    return this.prisma.thread.create({
      data: createThread,
    });
  }

  // Get All Threads
  async findAll() {
    return this.prisma.thread.findMany();
  }
}
