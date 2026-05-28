const express = require("express");
const app = express();

app.post('/fortnite/api/game/v2/profile/:accountId/client/:operation/*', async (req, res) => {
    res.status(200).send({
     status: "OK",
     code: 200
    });
});

module.exports = app;
