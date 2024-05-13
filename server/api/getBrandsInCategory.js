import mysql from "mysql2/promise";

export default defineEventHandler(async event => {
  const query = getQuery(event);
  const config = useRuntimeConfig();
  const pool = mysql.createPool(config.sqlConfig);

  const brands = await pool.query(`SELECT DISTINCT brand.id_branda, brand.naziv_branda FROM proizvod INNER JOIN brand ON brand.id_branda = proizvod.id_branda WHERE id_kategorije = ${query.categoryId} ORDER BY brand.naziv_branda ASC;`);
  return brands[0];
});