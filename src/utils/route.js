const express = require("express");
const app = express();

app.post('/datarouter/api/v1/public/data', async (req, res) => {
    res.status(200).send({
        status: "OK",
        code: 200
    });
})

module.exports = app;