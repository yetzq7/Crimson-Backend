const express = require("express");
const app = express();

const mongoose = require("mongoose");
require("dotenv").config();

app.use(require("./src/routes/routing.js"));
app.use(require("./src/utils/account.js"));
app.use(require("./src/routes/auth.js"));
app.use(require("./src/routes/contentpages.js"));
app.use(require("./src/routes/lightswitch.js"));
app.use(require("./src/routes/cloudstorage.js"));
app.use(require("./src/utils/version.js"));
app.use(require("./src/utils/mcp.js"));
app.use(require("./src/utils/keychain.js"));

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Crimson started listening on ${PORT}`);
});

console.log("hello world");

// module.exports = app;