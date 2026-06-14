const express = require("express")
const app = express();

app.post('/fortnite/api/game/v2/tryPlayOnPlatform/account/:accountId', async (req, res) => {
    res.setHeader("Content-Type", "text/plain");
    res.status(200).send("true");
});

app.get('/account/api/public/account/:accountId/externalAuths', async (req, res) => {
    res.status(200).send([]);
});

app.get('/fortnite/api/game/v2/enabled_features' , async (req, res) => {
    res.status(200).send([]);
});

app.get('/content-controls/:accountId', async (req, res) => {
    res.status(200).send([]);
});
app.get('/account/api/public/account', async (req, res) => {
    res.status(200).send({
        id: "fortnite",
        displayName: "fortnite",
        externalAuth: {}
    });
});

const NAME = process.env.NAME;

app.get('/account/api/public/account/:accountId', async (req, res) => {
    res.status(200).send({
    id: "fortnite",
    displayName: process.env.NAME,
    name: process.env.NAME,
    email: "fortnite@crimsom.dev",
    failedLoginAttempts: 0,
    lastLogin: "Timestamp",
    numberOfDisplayNameChanges: 0,
    ageGroup: "UNKNOWN",
    headless: false,
    country: "US",
    lastName: "User",
    links: {},
    preferredLanguage: "en",
    canUpdateDisplayName: false,
    tfaEnabled: true,
    emailVerified: true,
    minorVerified: true,
    minorExpected: true,
    minorStatus: "UNKNOWN"
    });
});

app.post('/api/v1/user/setting', async (req, res) => {
    res.status(200).send({
     status: "OK",
     code: 200
    });
});

app.get('/socialban/api/public/v1/:accountId', async (req, res) => {
    res.status(200).send([]);
});

app.get('/presence/api/v1/_/:accountId/settings/subscriptions', async (req, res) => {
    res.status(200).send([]);
});

app.get('/fortnite/api/game/v2/privacy/account/:accountId', async (req, res) => {
    res.status(200).send([]);
});

module.exports = app;