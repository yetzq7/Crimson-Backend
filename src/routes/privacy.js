const express = require("express");
const app = express();

app.get('/fortnite/api/game/v2/privacy/account/:accountId', async (req, res) => {
     res.status(200).send({
     status: "OK",
     code: 200
    });
});

module.exports = app;