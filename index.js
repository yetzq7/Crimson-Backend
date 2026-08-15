const express = require("express");
require("dotenv").config();
const path = require("path");
const fs = require("fs");
const app = express();
app.use(express.json());
const LOG = process.env.LOG == "true";
const MOBILE = process.env.MOBILE === "true"; // soon ig
const MOBILE_LOGIN = process.env.MOBILE_LOGIN == "true";
const RPC = process.env.DISCORD_RPC == "true";

const colors = {
  reset: '\x1b[0m',
  crimson: '\x1b[38;2;220;20;60m',
};

app.get("/", (req, res) => {
    res.status(200).send("Crimson Backend");
});

// better
const routesPath = path.join(__dirname, "src", "routes");

for (const file of fs.readdirSync(routesPath)) {
    if (!file.endsWith(".js")) continue;

    const route = require(path.join(routesPath, file));
    app.use(route);
}

if (LOG) {
    app.use(require("./src/utils/logger.js").middleware);{
        console.log('Logs enabled')
    }
}


if (RPC) {
    require("./src/discord-rpc/rpc.js");
    console.log("Discord RPC Enabled!");
}

if (MOBILE) {
  app.use(require("./src/utils/mobile.js"));
}

const PORT = process.env.PORT || 3000;

if (MOBILE_LOGIN) {
    app.get("/api/mobile", (req, res) => {
        res.sendFile(path.join(__dirname, "Mobile", "Login.html"));
    });
    console.log(`Mobile Login Page started on http://localhost:${PORT}/api/mobile`);
}

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
    console.log(`Crimson started on${colors.crimson} ${PORT} ${colors.reset}`);
});

module.exports = app;