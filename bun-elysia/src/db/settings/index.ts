// src/db/settings/index.ts
import { Pool } from "pg";
import os from "os";

const pool = new Pool({
  user: Bun.env.DB_USER,
  host: Bun.env.DB_HOST,
  database: Bun.env.DB_NAME,
  password: Bun.env.DB_PASSWORD,
  port: Number(Bun.env.DB_PORT),
});

export default {
  query: (text: string, params?: any[]) => pool.query(text, params),
};
