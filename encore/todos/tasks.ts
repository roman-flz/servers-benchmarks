import { api } from "encore.dev/api";

interface TodoResponseTs {
  id: string;
  title: string;
  completed: boolean;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export const getAll = api(
  {
    expose: true,
    method: "GET",
    path: "/api/v1/tasks",
  },
  async (): Promise<{ message: string; data: TodoResponseTs[] }> => {
    const response: TodoResponseTs[] = [];
    return { message: "Tasks fetched successfully", data: response };
  }
);
