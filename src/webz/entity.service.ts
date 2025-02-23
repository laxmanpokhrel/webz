import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateEntityDto } from './dto/entity.dto';

@Injectable()
export class EntityService {
  constructor(private prisma: PrismaService) {}

  // Create a EntityModel
  async create(createEntity: CreateEntityDto) {
    return this.prisma.entity.create({
      data: createEntity,
    });
  }

  // Get All Entity
  async findAll() {
    return this.prisma.entity.findMany();
  }
}
