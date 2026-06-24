const express = require("express");
const app = express();

app.get('/content/api/pages/fortnite-game', async (req, res) => {
    res.status(200).send({
     status: "OK",
     code: 200
    });
});

app.get('/api/v1/fortnite-br/surfaces/dmotd/target', async (req, res) => {
    const motd = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "responses", "motd.json"), "utf8"));
    res.status(200).send({
     status: "OK",
     code: 200
    });
});

app.get('/api/v1/fortnite-br/surfaces/motd/target', async (req,res) => {
    const motd = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "responses", "motd.json"), "utf8"));
    res.status(200).send({
     status: "OK",
     code: 200
    });
});


module.exports = app;