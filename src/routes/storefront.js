const express = require("express");
const app = express();

app.get('/fortnite/api/receipts/v1/account/:accountId/receipts', async (req, res) => {
    res.status(200).send({
        status: "OK",
        code: 200
    });
});

const keychain = require("../keychain/keychain.json");

app.get('/fortnite/api/storefront/v2/keychain', async (req, res) => {
    return res.status(200).send(keychain);
});

module.exports = app;