import mysql from "mysql2/promise";

export default defineEventHandler(async event => {
  const body = await readBody(event);
  const config = useRuntimeConfig();
  const pool = mysql.createPool(config.sqlConfig);

  const customer = body.narucitelj;
  const totalPrice = body.ukupnaCijena;
  const products = body.proizvodi;

  const saveCustomerToDb = await pool.query(`INSERT INTO narucitelj (ime_prezime, mjesto, postanski_broj, adresa, email, telefon) VALUES (${JSON.stringify(customer.ime)}, ${JSON.stringify(customer.mjesto)}, ${JSON.stringify(customer.postBroj)}, ${JSON.stringify(customer.adresa)}, ${JSON.stringify(customer.email)}, ${JSON.stringify(customer.telefon)});`);
  const getCustomerIdFromDb = await pool.query(`SELECT id_narucitelja FROM narucitelj WHERE email = ${JSON.stringify(customer.email)} ORDER BY id_narucitelja DESC LIMIT 1;`);
  const customerId = getCustomerIdFromDb[0][0].id_narucitelja;

  const saveOrderToDb = await pool.query(`INSERT INTO narudzba (id_narucitelja, datum, ukupna_cijena, nacin_placanja, status) VALUES (${customerId}, NOW(), ${totalPrice}, ${JSON.stringify(customer.nacinPlacanja)}, "U obradi");`); 
  const getOrderIdFromDb = await pool.query(`SELECT id_narudzbe FROM narudzba ORDER BY id_narudzbe DESC LIMIT 1;`);
  const orderId = getOrderIdFromDb[0][0].id_narudzbe;

  products.forEach(async product => {
    const saveOrderItemToDb = await pool.query(`INSERT INTO stavka_narudzbe (id_proizvoda, id_narudzbe, kolicina) VALUES (${product.id_proizvoda}, ${orderId}, ${product.kolicina});`); 
  });

  if (saveOrderToDb) {
    return true;
  } else {
    return false;
  }
});