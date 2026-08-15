const express = require("express");
const app = express();

const catalog = require("../responses/catalog.json");
const keychain = require("../responses/keychain.json");

app.get('/fortnite/api/receipts/v1/account/:accountId/receipts', async (req, res) => {
    res.status(200).send({
        status: "OK",
        code: 200
    });
});

app.get('/catalog/api/shared/bulk/offers', (req, res) => {
    res.json(catalog)
});

app.get('/fortnite/api/storefront/v2/keychain', async (req, res) => {
    return res.status(200).send(keychain);
});

module.exports = app;