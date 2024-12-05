import { Hono } from "hono";
import db from "./db/settings";
import { pgTasksQueries } from "./db/queries/tasks";

// const app = new Hono().basePath("/api/v1");
const app = new Hono();

// Root Segment
const root = "/api/v1";

//============= ROUTE HANDLERS=============//

// Get all tasks
app.get(`${root}`, async (c) => {
  try {
    const data = await db.query(pgTasksQueries.getAll);
    return c.json({
      message: "All Tasks fetched",
      data: data.rows,
    });
  } catch (err) {
    console.error(err);
    return c.json({ error: "Database error" }, 500);
  }
});

// Get all task by id
app.get(`${root}/:id`, async (c) => {
  try {
    const data = await db.query(pgTasksQueries.getById, [c.req.param("id")]);
    return c.json({
      message: "Task fetched",
      data: data.rows,
    });
  } catch (err) {
    console.error(err);
    return c.json({ error: "Database error" }, 500);
  }
});

// Create task
app.post(`${root}`, async (c) => {
  const { title, description } = await c.req.json();
  try {
    const output = await db.query(pgTasksQueries.create, [title, description]);
    if (output.rows) {
      const data = await db.query(pgTasksQueries.getAll);
      return c.json({
        message: "Task has been created successfully",
        data: data.rows,
      });
    }
  } catch (err) {
    console.error(err);
    return c.json({ error: "Database error" }, 500);
  }
});

// Delete task
app.delete(`${root}/:id`, async (c) => {
  try {
    await db.query(pgTasksQueries.delete, [c.req.param("id")]);
    const data = await db.query(pgTasksQueries.getAll);
    return c.json({ message: "Task deleted successfully", data: data.rows });
  } catch (err) {
    console.error(err);
    return c.json({ error: "Database error" }, 500);
  }
});

// Update task
app.put(`${root}/:id`, async (c) => {
  const { title, description } = await c.req.json();
  try {
    const output = await db.query(pgTasksQueries.update, [
      title,
      description,
      c.req.param("id"),
    ]);
    if (output.rows) {
      const data = db.query(pgTasksQueries.getAll);
      return c.json({
        message: "Task updated successfully",
        data: (await data).rows,
      });
    }
  } catch (err) {
    console.error(err);
    return c.json({ error: "Database error" }, 500);
  }
});

// Simplified version for connecting the server
// export default app;

// Optional
export default {
  port: Bun.env.SERVER_PORT || 3232,
  fetch: app.fetch,
};
