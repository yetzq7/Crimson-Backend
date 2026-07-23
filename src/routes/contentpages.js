const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
require("dotenv").config();
const contentpages = require("../responses/v1.json");
const motd = require("../responses/motd.json");

app.get('/content/api/pages/fortnite-game', async (req, res) => {
     res.json(contentpages)
});

app.post('/api/v1/fortnite-br/surfaces/motd/target', async (req, res) => {
    res.status(200).send(motd);
});
// should work??

module.exports = app;