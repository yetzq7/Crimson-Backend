const express = require("express");
const app = express();

app.get('/fortnite/api/receipts/v1/account/*/receipts', async (req, res) => {
        res.status(200).send({
        status: "OK",
        code: 200
    });
});

module.exports = app;