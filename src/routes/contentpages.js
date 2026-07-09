const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
require("dotenv").config();
const contentpages = require("../responses/contentpages.json");
//const contentpages = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "responses", "contentpages.json"), "utf8"));
const SEASON = process.env.SEASON;
const WC_LOBBY = process.env.WC_LOBBY == "true";

app.get('/content/api/pages/fortnite-game', async (req, res) => {

 // if (SEASON == "11") {
  //    contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "Winter19";
   //   contentpages.dynamicbackgrounds.backgrounds.backgrounds[1].stage = "Winter19";
 // }

 // if (WC_LOBBY) {
  //  contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "worldcup";
  //  contentpages.dynamicbackgrounds.backgrounds.backgrounds[1].stage = "worldcup";
  //}

 
  contentpages.emergencynotice = {
       news: {
            _type: "Battle Royale News",
            messages: [
              {
               hidden: process.env.emergency_notice_hidden || false,
                _type: "CommonUI Simple Message Base",
                title: "Crimson Backend",
               body: "made by yetzq",
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