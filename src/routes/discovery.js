const express = require("express");
const app = express();
const dicovery = require("../responses/discovery.json");

app.post("/api/v2/discovery/surface/", async (req, res) => {
    res.json(discovery);
});

app.post("/discovery/surface/", async (req, res) => {
    res.json(discovery);
})

module.exports = app;