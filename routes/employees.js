import express from "express";
import { createUser, deleteUser, getUsers } from "../services/user-service.js";


const Router = express.Router();
let products = [];
Router.get("/users", async (req, res) => {
    const { query } = req;
    const result = await getUsers(query)
    res.status(200).send(result)
    console.log(result)
});

Router.post("/users", (req, res) => {
    createUser(req.body)
    console.log(req.body)
    res.status(200).send(products)
})
Router.delete('/users', (req, res) => {
    const { query } = req
    deleteUser(query)
    res.status(200).send(products)
})
export default Router;