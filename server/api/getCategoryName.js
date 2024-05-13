import mysql from "mysql2/promise";

export default defineEventHandler(async event => {
  const query = getQuery(event);
  const config = useRuntimeConfig();
  const pool = mysql.createPool(config.sqlConfig);

  const categoryName = await pool.query(`SELECT naziv FROM kategorija WHERE id_kategorije=${query.id}`);
  return categoryName[0][0].naziv;
});