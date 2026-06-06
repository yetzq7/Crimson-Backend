const express = require("express");
require("dotenv").config();

const path = require("path");

const app = express();

app.use(express.json());


app.get("/", (req, res) => {
    res.status(200).send("Crimson Backend");
});


const MOBILE_LOGIN = process.env.MOBILE_LOGIN == "true";

if (MOBILE_LOGIN) {
        app.get("/mobile", (req, res) => {
    res.sendFile(path.join(__dirname, "Mobile", "Login.html"));
})  
}


console.log("Mobile Login Page started on 3551/mobile");

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

// Mob thingy
const MOBILE = process.env.MOBILE === "true";

if (MOBILE) {
  app.use(require("./src/utils/mobile"));
}
// port env
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
console.log(`Crimson started on ${PORT}`);
});


