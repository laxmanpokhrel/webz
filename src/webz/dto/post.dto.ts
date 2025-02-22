import { IsString, IsDate, IsOptional } from 'class-validator';

// DTO for creating a Post
export class CreatePostDto {
  @IsString()
  uuid: string;

  @IsString()
  title: string;

  @IsDate()
  @IsOptional()
  published?: Date;
}

// DTO for updating a Post
export class UpdatePostDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsDate()
  @IsOptional()
  published?: Date;
}
