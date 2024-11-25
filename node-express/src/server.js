import dotenv from "dotenv";
import express from "express";
import tasksQueries from "./db/queries/tasks/index.js";
import pool from "./db/settings/index.js";

dotenv.config();
const app = express();

const PORT = process.env.SERVER_PORT | 3000;
const root = "/api/v1";

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Get all tasks
app.get(`${root}/`, async (req, res) => {
  try {
    const output = await pool.query(tasksQueries.getAll);
    return res.json(output.rows);
  } catch (error) {
    console.error("Error fetching todos:", error);
    return res.status(500).send("Internal Server Error");
  }
});

// Get task by id
app.get(`${root}/:id`, async (req, res) => {
  try {
    const values = [req.params.id];
    const output = await pool.query(tasksQueries.getById, values);
    return res.json({
      message: "Task fetched successfully",
      data: output.rows,
    });
  } catch (error) {
    console.error("Error fetching todos:", error);
    return res.status(500).send("Internal Server Error");
  }
});

// Create task
app.post(`${root}`, async (req, res) => {
  try {
    const values = [req.body.title, req.body.description];
    const output = await pool.query(tasksQueries.create, values);
    if (output.rows) {
      const allTasks = await pool.query(tasksQueries.getAll);
      return res.json({
        message: "Task created successfully",
        data: allTasks.rows,
      });
    }
  } catch (error) {
    console.error("Error fetching todos:", error);
    return res.status(500).send("Internal Server Error");
  }
});

// Delete task
app.delete(`${root}/:id`, async (req, res) => {
  try {
    const values = [req.params.id];
    const output = await pool.query(tasksQueries.delete, values);
    if (output.rows) return res.json({ message: "Task deleted successfully" });
  } catch (error) {
    console.error("Error fetching todos:", error);
    return res.status(500).send("Internal Server Error");
  }
});

// Update task
app.put(`${root}/:id`, async (req, res) => {
  try {
    const values = [req.body.title, req.body.description, req.params.id];
    const output = await pool.query(tasksQueries.update, values);
    if (output.rows)
      return res.json({
        message: "Task updated successfully",
        data: output.rows,
      });
  } catch (error) {
    console.error("Error fetching todos:", error);
    return res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
