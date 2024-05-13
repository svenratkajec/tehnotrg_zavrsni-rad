import mysql from "mysql2/promise";

export default defineEventHandler(async event => {
  const query = getQuery(event);
  const config = useRuntimeConfig();
  const pool = mysql.createPool(config.sqlConfig);

  const count = await pool.query(`SELECT COUNT(*) AS count FROM proizvod WHERE id_kategorije = ${query.id}`);
  return { count: count[0][0].count };
});