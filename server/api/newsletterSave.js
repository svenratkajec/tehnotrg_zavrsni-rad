import mysql from "mysql2/promise";

export default defineEventHandler(async event => {
  const body = await readBody(event);
  const config = useRuntimeConfig();
  const pool = mysql.createPool(config.sqlConfig);

  const email = JSON.stringify(body.email);

  const [existingEmails] = await pool.query(`SELECT * FROM newsletter WHERE email = ${email}`);

  if (existingEmails.length !== 0) {
    return false;
  } else {
    const query = await pool.query(`INSERT INTO newsletter (email) VALUES (${email});`);
    if (query) {
      return true;
    }
  }
});