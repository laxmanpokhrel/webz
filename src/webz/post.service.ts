import { Injectable } from '@nestjs/common';
import { Post as PostModel } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  // Create a Post
  async create(createPost: PostModel) {
    console.log('🚀 ~ PostService ~ create ~ createPost:', createPost.uuid);
    return this.prisma.post.create({
      data: { ...createPost, categories: createPost.categories || [] },
    });
  }

  // Get All Posts
  async findAll() {
    return this.prisma.post.findMany();
  }
}
