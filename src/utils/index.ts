import { CreateEntityDto } from 'src/webz/dto/entity.dto';
import {
  CreateSocialMediaMetricDto,
  MetricItem,
} from 'src/webz/dto/socialmediametric.dto';

export interface IGetMetricRows {
  [platform: string]: Partial<MetricItem>;
}

/**
 * This TypeScript function takes in a metric object and an updated timestamp, then transforms the data
 * into an array of CreateSocialMediaMetricDto objects.
 * @param {IGetMetricRows} metric - The `metric` parameter in the `getMetricRows` function is of type
 * `IGetMetricRows`, which likely contains data related to social media metrics for different
 * platforms. The function processes this data and transforms it into an array of
 * `CreateSocialMediaMetricDto` objects. Each object in the
 * @param {string} updated - The `updated` parameter in the `getMetricRows` function is a string that
 * represents the timestamp or date when the metrics were last updated. This value is used to populate
 * the `updated` field in the resulting `CreateSocialMediaMetricDto` objects.
 * @returns The function `getMetricRows` returns an array of `CreateSocialMediaMetricDto` objects,
 * which are created based on the input `metric` object and the `updated` string provided as arguments
 * to the function.
 */
export function getMetricRows(
  metric: IGetMetricRows,
  updated: string,
  threadId: number | string,
): CreateSocialMediaMetricDto[] {
  const metricEntries = Object.entries(metric);
  const metricResults = metricEntries.reduce<CreateSocialMediaMetricDto[]>(
    (results, [social_media, platformData]) => {
      const socialMediaMetric: CreateSocialMediaMetricDto[] = Object.entries(
        platformData,
      ).map(
        ([metric_type, count]) =>
          ({
            updated,
            metric_type,
            count,
            social_media,
            threadUuid: threadId,
          }) as CreateSocialMediaMetricDto,
      );
      return [...results, ...socialMediaMetric];
    },
    [],
  );
  return metricResults;
}

interface IEntityValue {
  name: string;
  sentiment: string;
}

interface IGetPostEntitiesRows {
  [entityName: string]: IEntityValue[];
}

/**
 * The function `getPostEntitiesRows` takes an entity object and a postId, then maps the entity values
 * to create an array of CreateEntityDto objects with specified properties.
 * @param {IGetPostEntitiesRows} entity - The `entity` parameter in the `getPostEntitiesRows` function
 * is an object that contains different types of entities related to a post. Each key in the object
 * represents the type of entity, and the corresponding value is an array of entity objects with
 * properties like `name` and `sentiment`.
 * @param {string} postId - The `postId` parameter is a string that represents the unique identifier of
 * a post.
 * @returns The function `getPostEntitiesRows` returns an array of `CreateEntityDto` objects. Each
 * object in the array contains the properties `entity_type`, `entity_name`, `entity_sentiment`, and
 * `postId`, which are derived from the input `entity` object and `postId` string.
 */
export function getPostEntitiesRows(
  entity: IGetPostEntitiesRows,
  postId: string | number,
): CreateEntityDto[] {
  const entities = Object.entries(entity).reduce<CreateEntityDto[]>(
    (entiryResults, [entity_type, entity_value]) => {
      entity_value.map((val) => {
        return {
          entity_type,
          entity_name: val.name,
          entity_sentiment: val.sentiment,
          postId,
        };
      });
      return entiryResults;
    },
    [],
  );
  return entities;
}
