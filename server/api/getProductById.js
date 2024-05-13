import mysql from "mysql2/promise";

export default defineEventHandler(async event => {
  const query = getQuery(event);
  const config = useRuntimeConfig();
  const pool = mysql.createPool(config.sqlConfig);

  const product = await pool.query(`SELECT p.id_proizvoda, p.naziv, p.opis, p.specifikacije, p.cijena, p.glavna_fotografija, p.jamstvo, p.na_zalihi, b.naziv_branda, p.id_kategorije, k.naziv AS naziv_kategorije FROM proizvod p INNER JOIN brand b ON p.id_branda = b.id_branda INNER JOIN kategorija k ON p.id_kategorije = k.id_kategorije WHERE p.id_proizvoda = ${query.id};`);
  const images = await pool.query(`SELECT id_fotografije, putanja FROM fotografije_proizvoda WHERE id_proizvoda = ${query.id}`);
  return { proizvod: product[0][0], fotografije: images[0] };
});