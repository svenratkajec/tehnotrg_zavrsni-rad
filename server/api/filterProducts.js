import mysql from "mysql2/promise";

export default defineEventHandler(async event => {
  const query = getQuery(event);
  const config = useRuntimeConfig();
  const pool = mysql.createPool(config.sqlConfig);

  const products = await pool.query(`SELECT * FROM proizvod WHERE id_branda=${query.brandId};`);
  return products[0];
});