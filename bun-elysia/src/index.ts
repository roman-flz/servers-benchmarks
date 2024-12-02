import { Elysia } from "elysia";
import { curricula } from "./db";

const app = new Elysia()
  .get("/", () => "Hello Elysia")
  .get("/api", () => "Base api GET")
  .get("/api/:id", ({ params: { id }}) => `Basic dynamic get of ID:${id}`)
  .get("/curricula/:id", ({params: { id }}) => curricula(id))
  .post("/api/new/todo", () => "Hitting this endpoint should create a resource")
  .delete("/api/:id/delete/todo", ({ params: { id }}) => `Hitting this endpoint should remove the resource ID:${id}`)
  .put("/api/:id/update/todo", ({ params: { id }}) => `Hitting this endpoint should update the resource ID:${id}`)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
