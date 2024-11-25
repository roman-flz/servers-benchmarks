const pgTaskQueries = {
  getAll: "SELECT * FROM tasks",
  getById: "SELECT * FROM tasks WHERE id = $1",
  create: "INSERT INTO tasks (title, description) VALUES ($1, $2) RETURNING *",
  delete: "DELETE FROM tasks WHERE id = $1",
  update:
    "UPDATE tasks SET title = $1, description = $2 WHERE id = $3 RETURNING *",
};

export default pgTaskQueries;
