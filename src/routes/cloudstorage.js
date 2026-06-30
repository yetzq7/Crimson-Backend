const express = require("express");
const path = require("path");
const fs = require("fs");
const crypto = require("crypto");
const app = express();

app.get('/fortnite/api/cloudstorage/system', async (req, res) => {
    const dir = path.join(__dirname, "../../", "CloudStorage");
    
    let CloudFiles = [];

    // Checking
    if (fs.existsSync(dir)) {
        fs.readdirSync(dir).forEach(name => {
            if (name.toLowerCase().endsWith(".ini")) {
                const ParsedFile = fs.readFileSync(path.join(dir, name)).toString();
                const ParsedStats = fs.statSync(path.join(dir, name));

                CloudFiles.push({
                    "uniqueFilename": name,
                    "filename": name,
                    "hash": crypto.createHash('sha1').update(ParsedFile).digest('hex'),
                    "hash256": crypto.createHash('sha256').update(ParsedFile).digest('hex'),
                    "length": ParsedFile.length,
                    "contentType": "application/octet-stream",
                    "uploaded": ParsedStats.mtime,
                    "doNotCache": true
                });
            }
        });
    } else {
        console.log('CloudStorage folder not found');
    }

    res.json(CloudFiles);
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