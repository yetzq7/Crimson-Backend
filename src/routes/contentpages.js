const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
require("dotenv").config();
//const contentpages = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "responses", "contentpages.json"), "utf8"));
const contentpages = require("../responses/v1.json");

app.get('/content/api/pages/fortnite-game', async (req, res) => {
     //res.status(200).send(contentpages);
     res.json(contentpages)
});

app.post('/api/v1/fortnite-br/surfaces/motd/target', async (req, res) => {
    const motd = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "responses", "motd.json"), "utf8"));
    res.json(motd)
});
// should work??

module.exports = app;