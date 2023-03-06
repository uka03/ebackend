import pool from "../config/mysql-config.js";

export async function createUser(data) {
    // console.log(data, "sevice")
    const d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth()
    let day = d.getDate()
    let register_date = `${year}-${month}-${day}`;
    await pool.query(
        `INSERT INTO user (name , role,password , email, contact, adress_1, adress_2, user_image,register_date) values ('${data.name}', '${data.role}', '${data.password}', '${data.email}','${data.contact}' , '${data.adress_1}','${data.adress_2 ? data.adress_2 : null}','${data.user_image ? data.user_image : null}','${register_date}');`)

}

export async function deleteUser(crud) {
    await pool.query(`DELETE FROM user WHERE id = ${crud.id};`)
}

export async function getUsers(crud) {
    const [row] = await pool.query(`select * from user limit ${crud.limit ? crud.limit : 10}`)
    return row
}