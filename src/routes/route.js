const express = require("express");
const app = express();

app.post('/fortnite/api/game/v2/tryPlayOnPlatform/account/', async (req, res) => {
    return res.json({})
});

app.post('/datarouter/api/v1/public/data', async (req, res) => {
    res.status(200).send({
        status: "OK",
        code: 200
    });
});

app.post('/datarouter/api/v1/public/data/clients', async (req, res) => {
     res.status(200).send({
        status: "OK",
        code: 200
    });
});

app.post('/telemetry/data/datarouter/api/v1/public/data', async (req, res) => {
       res.status(200).send({
        status: "OK",
        code: 200
    });
});

module.exports = app;