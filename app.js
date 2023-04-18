const express = require("express");
const app = express();
const cors=require("cors");
const transactionsController = require("./controllers/transactionsController.js")

app.use(express.json());
app.use(cors());

/*
app.use((req, res, next) => {
    // Executes this for every code.  Stick validation in here, perhaps.
    next()
})
*/

app.use("/transactions", transactionsController);

app.get("/", (req, res) => {
    res.send(`Home directory`)
})

app.get("*", (req, res) => {
    res.status(404).json({error: "Page not found"})
})

module.exports = app;