const express = require("express");
require("dotenv").config();

const app = express();

app.use(express.json());

// Routes
app.use(require("./src/routes/lightswitch.js"));
app.use(require("./src/routes/contentpages.js"));
app.use(require("./src/routes/auth.js"));
app.use(require("./src/routes/cloudstorage.js"));

// Utils
app.use(require("./src/utils/mcp.js"));
app.use(require("./src/utils/account.js"));
app.use(require("./src/utils/keychain.js"));
app.use(require("./src/utils/route.js"));
app.use(require("./src/utils/version.js"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
console.log(`Crimson started on ${PORT}`);
});
