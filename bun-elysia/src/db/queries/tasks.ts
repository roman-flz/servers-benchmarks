export const taskQueries = {
  getAll: "SELECT * FROM tasks",
  getById: "SELECT * FROM tasks WHERE id = $1",
  create: "INSERT INTO tasks (title, description) VALUES ($1, $2) RETURNING *",
  update:
    "UPDATE tasks SET title = $1, description = $2 WHERE id = $3 RETURNING *",
  delete: "DELETE FROM tasks WHERE id = $1 RETURNING *",
};
