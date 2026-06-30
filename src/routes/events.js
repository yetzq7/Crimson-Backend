const express = require("express");
const app = express();
require("dotenv").config();
const fs = require("fs");
const path = require("path");

// start on events and tournament handling stuff
app.get("/api/v1/events/Fortnite/download/:accountId", async (req, res) => {
    const events = JSON.parse(fs.readFileSync(path.join(__dirname, "../responses/eventlistactive.json"), "utf8"));
    res.status(200).json(events);
});
app.get("/api/v1/players/Fortnite/tokens", async (req, res) => {
    res.status(200).send({
     status: "OK",
     code: 200
    });
});

app.get("/api/v1/leaderboards/Fortnite/:eventId/:eventWindowId/:accountId", async (req, res) => {
     res.status(200).send({
     status: "OK",
     code: 200
    });
});

app.get("/api/v1/events/Fortnite/data/", async (req, res) => {
     res.status(200).send({
     status: "OK",
     code: 200
    });
});

app.get("/api/v1/events/Fortnite/:eventId/:eventWindowId/history/:accountId", async (req, res) => {
    res.status(200).send({
     status: "OK",
     code: 200
    });
});

const SEASON = process.env.SEASON;

app.get("/api/v1/players/Fortnite/:accountId", async (req, res) => {
    res.json({
        "result": true,
        "region": "ALL",
        "lang": "en",
        "season": process.env.SEASON,
        "events": ['powercup']
    })
});

module.exports = app;