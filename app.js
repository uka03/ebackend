import express from "express";
import bodyParser from "body-parser";
import cors from "cors"
import Router from "./routes/employees.js";
import pool from "./config/mysql-config.js";

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

app.use(Router)



app.listen(port, () => {
    console.log("port", port)
})