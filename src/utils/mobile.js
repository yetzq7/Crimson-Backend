const express = require("express");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const app = express();
const MANIFEST_PATH = process.env.MANIFEST_PATH

const distributions = [
  "https://epicgames-download1.akamaized.net/",
  "https://download.epicgames.com/",
  "https://download2.epicgames.com/",
  "https://download3.epicgames.com/",
  "https://download4.epicgames.com/",
  "https://fastly-download.epicgames.com/",
];

app.get("/launcher/api/public/distributionpoints", (req, res) => {
  res.json({ distributions });
});

// optional trailing slash support
app.get("/launcher/api/public/distributionpoints/", (req, res) => {
  res.json({ distributions });
});

// Assets Endpoint
app.get(
  "/launcher/api/public/assets/:platform/:catalogItemId/:appName",
  (req, res) => {
    const { platform, catalogItemId, appName } = req.params;
    const label = req.query.label;

    // NOT Android case
    if (platform !== "Android") {
      return res.json({
        appName,
        labelName: label,
        buildVersion: "Crimson",
        catalogItemId,
        expires: "9999-02-30T23:59:59.999Z",
        items: {
          MANIFEST: {
            signature: "Crimson",
            distribution: "https://crimson.ol.epicgames.com/",
            path: "Builds/Fortnite/Content/CloudDir/manifest.manifest",
            additionalDistributions: [],
          },
        },
        assetId: appName,
      });
    }

    // Android case
    return res.json({
      appName,
      labelName: label,
      buildVersion: "Crimson",
      catalogItemId,
      expires: "9999-02-30T23:59:59.999Z",
      items: {
        MANIFEST: {
          signature: "Crimson",
          distribution: "https://epicgames-download1.akamaized.net/",
          path:
            process.env.MANIFEST_PATH,
          additionalDistributions: [],
        },
      },
      assetId: appName,
    });
  }
);

app.get(
  "/Builds/Fortnite/Content/CloudDir/:file.manifest",
  async (req, res) => {
    const filePath = path.join(
      __dirname,
      "public/clouddir/manifest.manifest"
    );

    const data = await fs.promises.readFile(filePath);

    res.setHeader("Content-Type", "application/octet-stream");
    res.send(data);
  }
);

app.get(
  "/Builds/Fortnite/Content/CloudDir/manifest/:file.ini",
  async (req, res) => {
    const filePath = path.join(__dirname, "public/clouddir/Full.ini");

    const data = await fs.promises.readFile(filePath);

    res.setHeader("Content-Type", "application/octet-stream");
    res.send(data);
  }
);

app.get(
  "/Builds/Fortnite/Content/CloudDir/:file.chunk",
  async (req, res) => {
    const filePath = path.join(__dirname, "public/clouddir/manifest.chunk");

    const data = await fs.promises.readFile(filePath);

    res.setHeader("Content-Type", "application/octet-stream");
    res.send(data);
  }
);


module.exports = app;