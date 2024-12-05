# NODEJS AND FASTIFY SERVER

    - This backend implementation aims to provide insight into the server performance when subjected to a rigorous stress test
    - The goal is to compare the performance relative to other server alternatives
    - The best candidate that provides the best results, along with additional complementary tools and features, will be considered for our near-future full-stack implementations

**Epic Jira Ticket** GDD-1527
**Jira Ticket** GDD-1546

## Directories and files

```
  ├─── node_modules/
  └─── db
  └─── plugins/
  └─── routes/
  └─── .env
  └─── .gitignore
  └─── app.js
  └─── package-lock.json
  └─── package.json
  └─── README.MD
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
    - @fastify/postgres
    - pg

## PG /db/settings

**Environment Variables**

    # App Port
    SERVER_PORT=<PORT>

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

## Available Scripts

In the project directory, you can run:

### `npm run dev`

To start the app in dev mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm start`

For production mode

### `npm run test`

Run the test cases.

## Learn More

To learn Fastify, check out the [Fastify documentation](https://fastify.dev/docs/latest/).
