# Implememtations

1. Docker
2. Docker compose
3. Analyze api response and design database
4. fetch 200 records from the api

# Improvements

1. Use of Promise.all(): when one query fails, it will reject the promise and won't continue for other success queries

SOLUTION: separately handle individual queries so that error and logging can be handled individually.

2. Search endpoint for records
3. Test Cases

# setup Guide

1. copy .env.example to .env
2. run `docker compose up -d --build `
3. run `docker exec -it webz-backend-1 /bin/bash`
4. run `npx prisma migrate dev --name init`
5. hit `http://localhost:3000/webz/init` to import first 200 records from webz
