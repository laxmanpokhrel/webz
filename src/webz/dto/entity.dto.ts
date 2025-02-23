// DTO for creating a Post
export class CreateEntityDto {
  post_id: number;
  entity_type: string;
  entity_name: string;
  entity_sentiment: string;
}

export class EntityItem {
  name: string;
  sentiment: string;
}
