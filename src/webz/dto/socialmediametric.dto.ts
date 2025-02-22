import { IsString, IsInt } from 'class-validator';

export class CreateSocialMediaMetricDto {
  @IsString()
  social_media: string;

  @IsString()
  metric_type: string;

  @IsInt()
  @IsOptional()
  count?: number;
}
