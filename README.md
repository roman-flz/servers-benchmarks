# Servers benchmarks

The project consists of stress testing various server setups to compare results and determine the most performant backend technology.

### Epic Jira ticket

https://ussdprdengcms03.hologic.corp/browse/GDD-1540

## Runtime Technologies

- [Nodejs](https://nodejs.org/en)
- [Bun](https://bun.sh)
- [Deno](deno.com/)
- [.NET](https://dotnet.microsoft.com/en-us/download)

## Framework Technologies

- [Express](https://expressjs.com)
- [Hono](hono.dev/)
- [Elysia](elysiajs.com/)
- [Endcore](https://encore.dev)

## Todo Enpoints Schema

- GET root/
- GET root/:id
- POST root
- DELETE root/:id
- PUT root/:id

### Load tester applications

#### Top Priority

- [K6](K6.io/)

#### Alternatives

- [Artillery](https://www.artillery.io)
- [Auto Cannon](https://github.com/mcollina/autocannon#readme)

```
DATABASE SETUP
1. Pull the postgresql image from the docker registry
2. Run the image
3. Go into the postgresql container terminal (as an alternative, you can use the docker client)
4. Create database 'dailytasks'
5. Go into database as "postgres" user by typing psql -U postgresql -d dailytasks
6. Create database:

CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE tasks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    description TEXT,
    createdat TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedat TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```
