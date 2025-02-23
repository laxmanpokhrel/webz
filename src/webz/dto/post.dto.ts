import { EntityItem } from './entity.dto';
import { ThreadDto } from './thread.dto';

// DTO for creating a Post
export class CreatePostDto {
  uuid: string;
  url: string;
  ord_in_thread: number;
  parent_url: null | string;
  author: string;
  published: string;
  title: string;
  text: string;
  highlightText: string;
  highlightTitle: string;
  highlightThreadTitle: string;
  language: string;
  sentiment: string;
  categories: string[];
  external_links: string[];
  external_images: string[];
  rating: number | null;
  crawled: string;
  updated: string;
}

export class PostDto {
  thread: ThreadDto;
  uuid: string;
  url: string;
  ord_in_thread: number;
  parent_url: null | string;
  author: string;
  published: string;
  title: string;
  text: string;
  highlightText: string;
  highlightTitle: string;
  highlightThreadTitle: string;
  language: string;
  sentiment: string;
  categories: string[];
  external_links: string[];
  external_images: string[];
  entities: {
    [entiry: string]: EntityItem[];
  };
  rating: number | null;
  crawled: string;
  updated: string;
}
