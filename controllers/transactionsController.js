const express = require("express");
const transactions = express.Router();
const transactionsArray = require("../models/transactions.js");

const idNotFound = (methodName, id) => {
    return `404 Error.  Could not ${methodName}.  Transaction ID ${id} not found.`
}

//INDEX
transactions.get("/", (req, res) => {
    res.json(transactionsArray);
});

//SHOW
transactions.get("/:id", (req, res) => {
    if (transactionsArray[req.params.id]) {
        res.json(transactionsArray[req.params.id]);
    } else {
        res.status(404).json({error: idNotFound("show(get)", req.params.id)});
    }
});

//CREATE
transactions.post("/", (req, res) => {
    transactionsArray.push(req.body);
    res.json(transactionsArray[transactionsArray.length - 1]);
})

//DESTROY
transactions.delete("/:id", (req, res) => {
    if (transactionsArray[req.params.id]) {
        const deletedTransaction = transactionsArray.splice(req.params.id, 1);
        res.status(200).json(deletedTransaction);
    } else {
        res.status(404).json({error: idNotFound("destroy(delete)", req.params.id)});
    }

})

//UPDATE
transactions.put("/:id", (req, res) => {
    if(transactionsArray[req.params.id]) {
        transactionsArray[req.params.id] = req.body;
        res.status(200).json(transactionsArray[req.params.id]);
    } else {
        res.status(404).json({error: idNotFound("update(put)", req.params.id)})
    }
})

module.exports = transactions;