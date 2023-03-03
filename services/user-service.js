import pool from "../config/mysql-config";

export async function createUser(name, role, password, email, contact, adress_1, adress_2, user_image) {
    const d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth()
    let day = d.getDate()
    let register_date = `${year}-${month}-${day}`;
    await pool.query(
        ` insert into user (name,role,password,email,contact, adress_1,adress_2,user_image,register_date) values (${name},${role},${password},${email},${contact},${adress_1},${adress_2},${user_image},${register_date})`

    )
    /// insert into user (name,role,password,email,contact, adress_1,adress_2,user_image,register_date)

}