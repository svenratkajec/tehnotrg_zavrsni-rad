import mysql from "mysql2/promise";

export default defineEventHandler(async event => {
  const query = getQuery(event);
  const config = useRuntimeConfig();
  const pool = mysql.createPool(config.sqlConfig);

  let products = [];

  if (!query.limit) {
    products = await pool.query(`SELECT id_proizvoda, naziv, specifikacije, cijena, glavna_fotografija, brand.id_branda, brand.naziv_branda FROM proizvod INNER JOIN brand ON proizvod.id_branda = brand.id_branda WHERE id_kategorije=${query.id}`);
  } else {
    products = await pool.query(`SELECT id_proizvoda, naziv, specifikacije, cijena, glavna_fotografija, brand.id_branda, brand.naziv_branda FROM proizvod INNER JOIN brand ON proizvod.id_branda = brand.id_branda WHERE id_kategorije=${query.id} ORDER BY RAND() LIMIT ${query.limit}`);
  }

  return products[0];
});