const express = require("express");
const app = express();

app.get('/fortnite/api/cloudstorage/system', async (req, res) => {
  //  const file = path.join(__dirname, "..", "cloudstorage");
    res.status(200).send({
     status: "OK",
     code: 200
    });
});

app.get('/fortnite/api/cloudstorage/user/:accountId', async (req, res) =>{
    res.status(200).send({
     status: "OK",
         code: 200
    });
});

app.put('/fortnite/api/cloudstorage/user/:accountId/:fileName', async (req, res) => {
    res.status(200).send({
     status: "OK",
     code: 200
    });
}); 

module.exports = app;