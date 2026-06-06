const express = require("express");
const app = express();

const keychain = require("../keychain/keychain.json");

app.get('/fortnite/api/storefront/v2/keychain', async (req, res) => {
    return res.status(200).send(keychain);
})

module.exports = app;