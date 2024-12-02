// Make sure to install the 'pg' package 
import { drizzle } from 'drizzle-orm/node-postgres';
import { sql } from 'drizzle-orm' 

// You can specify any property from the node-postgres connection options

console.log(process.env.NODE_ENV)
const db = drizzle({
  connection: {
    connectionString: process.env.PG_CONN_STRING,
  }
});

const result = await db.execute('select 1');

// example id c22fc3c4-7e2b-43af-bf1d-c641b7218ffa
export const curricula = async (id:string|number) => {
  const qString = sql`
  SELECT *
  FROM curricula
  WHERE id=${id}
  `
  const res = await db.execute(qString)
  return (
    `Rows: ${res.rows.map((r)=> JSON.stringify(r))}`
  )
}
export default result;