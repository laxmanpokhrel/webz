# Database

The post received from the webz seems to be preety mush simple.
But the part where we have to store the social metrics of the post can be tricky.

## Why?

Because, the metric is flexible. Some have shares and some don't have.

## Solution

we can follow any one two approaches below.

#### 1. Create a JSON column and add JSON data in the format we want.

#### 2. Normalize the tables for every platform. But I don't recommend doing this because if a platform has to be added in the metric then we have to create a separate table, which can be overkill.

#### 3. Create a separate metric table and we can have columns for platform, metric_type, count and update_at.

Down side of following 2nd approach:

1. Manual filtering should be done in case of queries like post with more that 50 likes in facebook.
2. Cannot use database aggregate queries (SUM, etc).

Here i have used 3rd approach because it's easy to query the data related to social matrices.
