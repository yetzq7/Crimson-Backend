const express = require("express");
const app = express();

const tokens = {
    access_token: "eg1~fortnite",
    expires_in: 28800,
    expires_at: "9999-12-02T01:12:01.100Z",
    token_type: "bearer",
    refresh_token: "eg1~fortnite",
    refresh_expires: 86400,
    refresh_expires_at: "9999-12-02T01:12:01.100Z",
    account_id: "fortnite",
    client_id: "fortnite",
    internal_client: true,
    client_service: "fortnite",
    displayName: "fortnite",
    app: "fortnite",
    in_app_id: "fortnite",
    device_id: "fortnite"
};

app.post('/account/api/oauth/token', async (req, res) => {
    return res.status(200).json(tokens);
});

app.get('/account/api/oauth/verify', async (req, res) => { 
    return res.status(200).json(tokens);
});

app.delete('/account/api/oauth/sessions/kill', async (req, res) => {
    return res.status(204).send(); 
});

app.delete('/account/api/oauth/sessions/kill/:token', async (req, res) => {
    return res.status(204).send(); 
});

module.exports = app;