export class CreateSocialMediaMetricDto {
  social_media: string;
  metric_type: string;
  count: number;
  updated: string;
  threadUuid: number;
}

export class MetricItem {
  likes: number;
  comments: number;
  shares: number;
}

export class SocialMediaMetricDto {
  [social_media: string]: MetricItem | string;
}
