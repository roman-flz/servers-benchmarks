import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";
import prisma from "../prismaClient";

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
    const tasks = await prisma.tasks.findMany();
    return {
      message: "All Tasks fetched",
      data: tasks,
    };
  })
  .get("/api/v1/:id", async ({ params: { id } }) => {
    const task = await prisma.tasks.findUnique({
      where: { id },
    });
    return {
      message: "Task fetched",
      data: task,
    };
  })
  .post(
    "/api/v1",
    async ({
      body: { title, description },
    }: {
      body: { title: string; description: string };
    }) => {
      const task = await prisma.tasks.create({
        data: {
          title,
          description,
        },
      });
      return {
        message: "Task has been created successfully",
        data: task,
      };
    }
  )
  .put("/api/v1/:id", async ({ params, body }) => {
    const { id } = params;
    const { title, description } = body as {
      title: string;
      description: string;
    };
    const task = await prisma.tasks.update({
      where: { id },
      data: {
        title,
        description,
      },
    });
    return {
      message: "Task has been updated successfully",
      data: task,
    };
  })
  .delete("/api/v1/:id", async ({ params: { id } }) => {
    const task = await prisma.tasks.delete({
      where: { id },
    });
    return {
      message: "Task has been deleted successfully",
      data: task,
    };
  })
  .listen(1011);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
