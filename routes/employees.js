import express from "express";


const Router = express.Router();
let products = [];
Router.get("/products", (req, res) => {
    res.status(200).send("huselt")
    console.log("huselt irew")
});

Router.post("/products", (req, res) => {
    console.log(req.body)
    products.push(req.body)
    req.body.id = products.length
    res.status(200).send(products)
})
Router.delete('/products', (req, res) => {
    products.pop()
    res.status(200).send(products)
})
export default Router;