// Will move to a main file soon

const express = require("express");
const app = express();

app.get('/fortnite/api/game/v2/enabled_features', async (req, res) => {
    return res.json({})
});

app.get('/fortnite/api/game/v2/grant_access/', async (req, res) => {
    return res.json({})
});

module.exports = app;