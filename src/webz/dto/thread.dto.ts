import { Type } from 'class-transformer';
import {
  IsArray,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateThreadDto {
  @IsString()
  @IsNotEmpty()
  uuid: string;

  @IsString()
  @IsNotEmpty()
  url: string;

  @IsString()
  @IsNotEmpty()
  site_full: string;

  @IsString()
  @IsNotEmpty()
  site: string;

  @IsString()
  @IsNotEmpty()
  site_section: string;

  @IsArray()
  @IsString({ each: true })
  site_categories: string[];

  @IsString()
  @IsNotEmpty()
  section_title: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  title_full: string;

  @IsOptional()
  @Type(() => Date)
  @IsDate()
  published?: Date;

  @IsOptional()
  @IsNumber()
  replies_count?: number;

  @IsOptional()
  @IsNumber()
  participants_count?: number;

  @IsOptional()
  @IsString()
  site_type?: string;

  @IsOptional()
  @IsString()
  country?: string;

  @IsOptional()
  @IsString()
  main_image?: string;

  @IsOptional()
  @IsNumber()
  performance_score?: number;

  @IsOptional()
  @IsNumber()
  domain_rank?: number;

  @IsOptional()
  @Type(() => Date)
  @IsDate()
  domain_rank_updated?: Date;

  // Assuming SocialMediaMetric is a related entity, you could either create
  // a separate DTO for it or leave it as a generic array.
  @IsOptional()
  @IsArray()
  SocialMediaMetric?: any[];
}
