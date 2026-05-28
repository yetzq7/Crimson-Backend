const express = require("express")
const app = express();

const mongoose = require ("mongoose");
require ("dotenv").config();
// const crimson-backend = require("crimson-backend");

app.use = (require("routes/route.js"));
app.use(require("utils/account.js"));
app.use(require("routes/auth.js"));
app.use(require("routes/contentpages.js"));
app.use(require("routes/lightswitch.js"));
app.use(require("routes/cloudstorage.js"));
app.use(require("utils/version.js"));
// express.use = (require("routes/"));
// express.use = (require("routes/"));



const port = process.env.PORT;
app.listen(PORT); // proper console log
    wait(20)
    console.log("Crimson started listening on ${port}")


console.log("hello world");