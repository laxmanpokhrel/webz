import { Injectable } from '@nestjs/common';
import { Entity as EntityModel } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class EntityService {
  constructor(private prisma: PrismaService) {}

  // Create a EntityModel
  async create(createEntity: EntityModel) {
    return this.prisma.entity.create({
      data: createEntity,
    });
  }

  // Get All Entity
  async findAll() {
    return this.prisma.entity.findMany();
  }
}
