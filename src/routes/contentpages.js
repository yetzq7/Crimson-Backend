const express = require("express");
const app = express();

app.get('/content/api/pages/fortnite-game/*', async (req, res) => {
    res.status(200).send({
     status: "OK",
     code: 200
    });
});

module.exports = app;