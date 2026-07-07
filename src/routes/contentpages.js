const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

const contentpages = require("../responses/contentpages.json");
//const contentpages = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "responses", "contentpages.json"), "utf8"));

app.get('/content/api/pages/fortnite-game', async (req, res) => {
    contentpages.emergencynotice = {
        news: {
            _type: "Battle Royale News",
            messages: [
              {
                hidden: process.env.emergency_notice_hidden || false,
                _type: "CommonUI Simple Message Base",
                title: "Crimson Backend",
                body: "hello world",
                spotlight: true
              }
            ]
          },
          _title: "emergencynotice",
          _noIndex: false,
          alwaysShow: false,
          _activeDate: "2018-08-06T19:00:26.217Z",
          lastModified: "2019-10-29T22:32:52.686Z",
          _locale: "en-US"
    }
    res.status(200).send(contentpages);
});

app.post('/api/v1/fortnite-br/surfaces/motd/target', async (req, res) => {
    const motd = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "responses", "motd.json"), "utf8"));
    res.json(motd)
});
// should work??

module.exports = app;