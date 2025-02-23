import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreatePostDto } from './dto/post.dto';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  // Create a Post
  async create(createPost: CreatePostDto) {
    return this.prisma.post.create({
      data: { ...createPost, categories: createPost.categories || [] },
    });
  }

  // Get All Posts
  async findAll() {
    return this.prisma.post.findMany();
  }
}
