# Servers benchmarks
The project consists of stress testing various server setups to compare results and determine the most performant backend technology.

### Epic Jira ticket
https://ussdprdengcms03.hologic.corp/browse/GDD-1527

Meant to be used as naming convention for all future commits 
1. e.g  GDD-1527-runtime-env-**type-brief-description**
2. e.g. GDD-1527-node-express-**type-brief-description**


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
- /api/
- /api/:id/todo
- /api/new/todo
- /api/:id/delete/todo
- /api/:id/update/todo

### Load tester applications
- [Artillery](https://www.artillery.io)
- [Auto Cannon](https://github.com/mcollina/autocannon#readme)
