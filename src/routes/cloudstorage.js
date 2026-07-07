const express = require("express");
const path = require("path");
const fs = require("fs");
const crypto = require("crypto");
const app = express();

const userDir = path.join(__dirname, "ClientSettings");
if (!fs.existsSync(userDir)) {
    fs.mkdirSync(userDir, { recursive: true });
}

app.use((req, res, next) => {
    if (req.originalUrl.toLowerCase().startsWith("/fortnite/api/cloudstorage/user/") && req.method === "PUT") {
        req.rawBody = "";
        req.setEncoding("latin1");

        req.on("data", (chunk) => req.rawBody += chunk);
        req.on("end", () => next());
    }
    else return next();
});

app.get('/fortnite/api/cloudstorage/system', async (req, res) => {
    const dir = path.join(__dirname, "../..", "CloudStorage");
    
    let CloudFiles = [];
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
                    "storageType": "S3",
                    "storageIds": {},
                    "uploaded": ParsedStats.mtime,
                    "doNotCache": true
                });
            }
        });
    }

    res.json(CloudFiles);
});

app.get('/fortnite/api/cloudstorage/system/:file', async (req, res) => {
    const filePath = path.join(__dirname, "../..", "CloudStorage", req.params.file);

    if (!fs.existsSync(filePath)) {
        return res.status(404).end();
    }

    const data = fs.readFileSync(filePath);
    res.set('Content-Type', 'application/octet-stream');
    return res.status(200).send(data);
});

app.get('/fortnite/api/cloudstorage/user/:accountId', async (req, res) => {
    const userDir = path.join(__dirname, "ClientSettings");
    
    // Creates the folder if its missinbg
    if (!fs.existsSync(userDir)) {
        fs.mkdirSync(userDir, { recursive: true });
        return res.json([]);
    }

    const filePath = path.join(userDir, "ClientSettings.sav");
    
    if (fs.existsSync(filePath)) {
        const file = fs.readFileSync(filePath, 'latin1');
        const stats = fs.statSync(filePath);
        
        return res.json([{
            "uniqueFilename": "ClientSettings.Sav",
            "filename": "ClientSettings.Sav",
            "hash": crypto.createHash('sha1').update(file).digest('hex'),
            "hash256": crypto.createHash('sha256').update(file).digest('hex'),
            "length": Buffer.byteLength(file, 'latin1'),
            "contentType": "application/octet-stream",
            "uploaded": stats.mtime,
            "storageType": "S3",
            "storageIds": {},
            "accountId": req.params.accountId,
            "doNotCache": true
        }]);
    } else {
        return res.json([]);
    }
});

app.put('/fortnite/api/cloudstorage/user/:accountId/:fileName', async (req, res) => {
    if (req.params.fileName.toLowerCase() !== "clientsettings.sav") {
        return res.status(404).json({ error: "file not found" });
    }

    const userDir = path.join(__dirname, "ClientSettings");
    
    if (!fs.existsSync(userDir)) {
        fs.mkdirSync(userDir, { recursive: true });
    }

    // Actual Save
    const filePath = path.join(userDir, "ClientSettings.sav");
    fs.writeFileSync(filePath, req.rawBody || '', 'latin1');
    res.status(204).end();
});

module.exports = app;