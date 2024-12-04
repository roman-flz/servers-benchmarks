import type { Config } from "drizzle-kit";

export default {
  schema: "./schema/tasks.ts",
  out: "./drizzle",
} satisfies Config;
