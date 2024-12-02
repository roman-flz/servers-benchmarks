import { api } from "encore.dev/api";
import { SQLDatabase } from "encore.dev/storage/sqldb";

const db = new SQLDatabase("todos", {
  migrations: "./migrations",
});

interface TaskResponseTs {
  id: string;
  title: string;
  completed: boolean;
  description: string;
  createdAt: string;
  updatedAt: string;
}

interface IdTs {
  id: string;
}

interface CreatePayloadTs {
  title: string;
  description: string;
}

interface UpdatePayloadTs {
  id: string;
  title: string;
  description: string;
}

interface ResponseTs {
  message: string;
  data: TaskResponseTs | null;
}

// Get all tasks
export const getAllTasks = api(
  {
    expose: true,
    method: "GET",
    path: "/api/v1/tasks",
  },
  async (): Promise<{ message: string; data: TaskResponseTs[] }> => {
    const response: TaskResponseTs[] = [];
    try {
      const tasks = db.query`SELECT * FROM tasks`;
      for await (const task of tasks) {
        response.push(task as TaskResponseTs);
      }
      return { message: "Tasks fetched successfully", data: response };
    } catch (error) {
      console.error(error);
      return { message: "Error fetching tasks", data: [] };
    }
  }
);

// Get task by ID
export const getSingleTask = api(
  {
    expose: true,
    method: "GET",
    path: "/api/v1/task/:id",
  },
  async ({ id }: IdTs): Promise<ResponseTs> => {
    try {
      const task = await db.queryRow`SELECT * FROM tasks WHERE id = ${id}`;
      if (!task)
        return { message: `Task with id: ${id} not found`, data: null };
      return {
        message: `Task fetched successfully`,
        data: task as TaskResponseTs,
      };
    } catch (error) {
      console.error(error);
      return { message: `Error fetching task with ${id}`, data: null };
    }
  }
);

// Create a task
export const createTask = api(
  {
    expose: true,
    method: "POST",
    path: "/api/v1/tasks/create",
  },
  async ({ title, description }: CreatePayloadTs): Promise<ResponseTs> => {
    try {
      const task =
        await db.queryRow`INSERT INTO tasks (title, description) VALUES (${title}, ${description}) RETURNING *`;
      if (!task) {
        throw new Error("Task creation failed, no task returned");
      }
      return {
        message: "Task created successfully",
        data: task as TaskResponseTs,
      };
    } catch (error) {
      console.error("Error creating task:", error);

      return {
        message: "Error creating task",
        data: null,
      };
    }
  }
);

// Update task
export const updateTask = api(
  {
    expose: true,
    method: "PUT",
    path: "/api/v1/task/:id",
  },
  async ({ id, title, description }: UpdatePayloadTs): Promise<ResponseTs> => {
    try {
      const task = await db.queryRow`
        UPDATE tasks
        SET title = ${title}, description = ${description}
        WHERE id = ${id}
        RETURNING *;
      `;
      if (!task) {
        throw new Error(`Task with ID ${id} not found`);
      }
      return {
        message: "Task updated successfully",
        data: task as TaskResponseTs,
      };
    } catch (error) {
      console.error(`Error updating task with ID ${id}:`, error);

      return {
        message: `Error updating task with ID ${id}`,
        data: null,
      };
    }
  }
);

// Delete a task
export const deleteTask = api(
  {
    expose: true,
    method: "DELETE",
    path: "/api/v1/task/:id",
  },
  async ({ id }: IdTs): Promise<ResponseTs> => {
    try {
      const task =
        await db.queryRow`DELETE FROM tasks WHERE id= ${id} RETURNING *`;
      if (!task) {
        throw new Error(`Task with ${id} not found`);
      }
      return {
        message: "Task deleted successfully",
        data: task as TaskResponseTs,
      };
    } catch (error) {
      console.error(`Error deleting task with ${id}:`, error);
      return {
        message: `Error deleting task with ${id}`,
        data: null,
      };
    }
  }
);
