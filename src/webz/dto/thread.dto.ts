import { SocialMediaMetricDto } from './socialmediametric.dto';

export class CreateThreadDto {
  uuid: string;
  url: string;
  site_full: string;
  site: string;
  site_section: string;
  site_categories: string[];
  section_title: string;
  title: string;
  title_full: string;
  published?: string;
  replies_count?: number;
  participants_count?: number;
  site_type?: string;
  country?: string;
  main_image?: string;
  performance_score?: number;
  domain_rank?: number;
  domain_rank_updated?: string;
}

export class ThreadDto {
  uuid: string;
  url: string;
  ord_in_thread: number;
  parent_url: string;
  author: string;
  published: string;
  title: string;
  text: string;
  highlightText: string;
  highlightThreadTitle: string;
  highlightTitle: string;
  language: string;
  sentiment: string;
  site_categories: string[];
  external_links: string;
  external_images: string;
  rating: number;
  crawled: string;
  updated: string;
  categories: string;
  site_full: string;
  site: string;
  site_section: string;
  section_title: string;
  title_full: string;

  social: SocialMediaMetricDto;
}
