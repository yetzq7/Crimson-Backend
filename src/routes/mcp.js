const express = require("express");
const app = express();
// upd soon

app.post('/fortnite/api/game/v2/profile/:accountId/client/:operation', async (req, res) => {
    res.status(200).send({
      status: "OK",
      code: 200
    });
});

app.post('/fortnite/api/game/v2/profile/client/SetReceiveGiftsEnabled', async (req, res) => {
   res.status(200).send({
      status: "OK",
      code: 200
    });
});

app.post('/fortnite/api/game/v2/profile/client/SetItemFavoriteStatusBatch', async (req, res) => {
   res.status(200).send({
      status: "OK",
      code: 200
    });
});

app.post('/fortnite/api/game/v2/profile/client/SetAffiliateName', async (req, res) => {
   res.status(200).send({
      status: "OK",
      code: 200
    });
});


module.exports = app;
