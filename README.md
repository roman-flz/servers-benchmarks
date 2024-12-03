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

- [Artillery](https://www.artillery.io)
- [Auto Cannon](https://github.com/mcollina/autocannon#readme)

```
<!-- Plugin to enable uuid when creating table -->
CREATE EXTENSION IF NOT EXISTS pgcrypto;

<!-- Create database daily tasks -->
CREATE DATABASE dailytasks;

<!-- Create Tasks Table -->
CREATE TABLE tasks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    description TEXT,
    createdat TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedat TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```
