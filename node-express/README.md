# NODEJS AND EXPRESSJS SERVER

    - This backend implementation aims to provide insight into the server performance when subjected to a rigorous stress test
    - The goal is to compare the performance relative to other server alternatives
    - The best candidate that provides the best results, along with additional complementary tools and features, will be considered for our near-future full-stack implementations

```
**Epic Jira Ticket** GDD-1527
**Jira Ticket** GDD-1537
```

## Directories

```
  ├───node_modules
  └───src
  |   └───db
  |   |   ├───queries
  |   |   │   └───tasks
  |   |   └───settings
  |   └─── server.js
  └─────── .env
  └─────── .package-lock.json
  └─────── .package.json
  └───────  README.md
```

## Endpoints

**Root Segment** /api/v1

    - GET root/
    - GET root/:id
    - POST root
    - DELETE root/:id
    - PUT root/:id

## Dependencies

    - Runtime environment x >= NodeJs 22.5
    - Express Js  x >= 4.21.1
    - dotenv
    - nodemon
    - pg

## PG /db/settings

**Environment Variables**

    # App Port
    SERVER_PORT=8000

    # DB Settings
    DB_HOST=<host>
    DB_USER=<db_user>
    DB_PASSWORD=<db_password>
    DB_NAME=<db_name>
    DB_PORT=<db_port>

Run the following to execute the server
npm run dev

```

```
