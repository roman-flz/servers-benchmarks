const { Pool } = require("pg");

const pool = new Pool({
  user: Bun.env.DB_USER,
  host: Bun.env.DB_HOST,
  database: Bun.env.DB_NAME,
  password: Bun.env.DB_PASSWORD,
  port: Bun.env.DB_PORT,
});

module.exports = {
  query: (text: any, params: any) => pool.query(text, params),
};
