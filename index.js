const express = require("express");
require("dotenv").config();

const path = require("path");

const app = express();

app.use(express.json());


app.get("/", (req, res) => {
    res.status(200).send("Crimson Backend");
});


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
const { Log, LogError, LogDebug } = require("./src/utils/logger.js");

const LOG = process.env.LOG == "true";

if (LOG) {
    console.log('============== Console Logs Enabled =====================')
}

// Mob thingy
const MOBILE = process.env.MOBILE === "true";

if (MOBILE) {
  app.use(require("./src/utils/mobile.js"));
}
// port env
const PORT = process.env.PORT || 3000;

const MOBILE_LOGIN = process.env.MOBILE_LOGIN == "true";

if (MOBILE_LOGIN) {
    app.get("/api/mobile", (req, res) => {
        res.sendFile(path.join(__dirname, "Mobile", "Login.html"));
    });

    console.log(`Mobile Login Page started on http://localhost:${PORT}/api/mobile`);
}

// larplarp
const banner = `
 _____      _                            ______            _                  _  
/  __ \\    (_)                           | ___ \\          | |                | | 
| /  \\/_ __ _ _ __ ___  ___  ___  _ __   | |_/ / __ _  ___| | _____ _ __   __| | 
| |   | '__| | '_ \` _ \\/ __|/ _ \\| '_ \\  | ___ \\/ _\` |/ __| |/ / _ \\ '_ \\ / _\` | 
| \\__/\\ |  | | | | | | \\__ \\ (_) | | | | | |_/ / (_| | (__|   <  __/ | | | (_| | 
 \\____/_|  |_|_| |_| |_|___/\\___/|_| |_| \\____/ \\__,_|\\___|_|\\_\\___|_| |_|\\__,_| 
`;

console.log(banner);

app.listen(PORT, () => {
console.log(`Crimson started on ${PORT}`);
});
