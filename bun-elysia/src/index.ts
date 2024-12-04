import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";
import db from "./db/settings";
import { taskQueries } from "./db/queries/tasks";

const app = new Elysia()
  .use(
    swagger({
      exclude: ["/swagger"],
      autoDarkMode: true,
      documentation: {
        info: {
          title: "🦊 Elysia Clean Architecture",
          description:
            "Clean Architecture pattern for ElysiaJS + Bun + Postgres.js by CATFISH",
          version: "1.0.0",
          license: {
            name: "MIT",
            url: "https://opensource.org/license/mit/",
          },
          contact: {
            name: "Roman Feliz",
          },
        },
      },
    })
  )
  .get("/api/v1", async () => {
    const { rows } = await db.query(taskQueries.getAll);
    return {
      message: "All Tasks fetched",
      data: rows,
    };
  })
  .get("/api/v1/:id", async ({ params: { id } }) => {
    const { rows } = await db.query(taskQueries.getById, [id]);
    return {
      message: "Task fetched",
      data: rows,
    };
  })
  .post(
    "/api/v1",
    async ({ body }: { body: { title: string; description: string } }) => {
      const { rows } = await db.query(taskQueries.create, [
        body.title,
        body.description,
      ]);
      return {
        message: "Task has been created successfully",
        data: rows,
      };
    }
  )
  .put("/api/v1/:id", async ({ params, body }) => {
    const { id } = params;
    const { title, description } = body as {
      title: string;
      description: string;
    };
    const { rows } = await db.query(taskQueries.update, [
      title,
      description,
      id,
    ]);
    return {
      message: "Task has been updated successfully",
      data: rows,
    };
  })
  .delete("/api/v1/:id", async ({ params: { id } }) => {
    const { rows } = await db.query(taskQueries.delete, [id]);
    return {
      message: "Task has been deleted successfully",
      data: rows,
    };
  })
  .listen(1011);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
