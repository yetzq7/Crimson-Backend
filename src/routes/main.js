const express = require("express");
const app = express();

const privacy = require("../responses/privacy.json");

app.get('/fortnite/api/game/v2/enabled_features', async (req, res) => {
    return res.json({})
});

app.get('/fortnite/api/game/v2/grant_access/', async (req, res) => {
    return res.json({})
});

app.get('/fortnite/api/game/v2/privacy/account/:accountId', async (req, res) => {
        privacy.accountId = req.params.accountId;
    res.json(privacy);
});

app.get('/waitingroom/api/waitingroom', async (req, res) => {
        res.status(200).send({
        status: "OK",
        code: 200
    });
});

app.get('/friends/api/v1/:accountId/settings', async (req, res) => {
       res.status(200).send({
       status: "OK",
       code: 200
    });
});



module.exports = app;