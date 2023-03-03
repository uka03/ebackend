import mysql from "mysql2";
//энд холболтын pool үүсгэж байна.
const pool = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "ecomme", //selecting data
}).promise();



export default pool;
