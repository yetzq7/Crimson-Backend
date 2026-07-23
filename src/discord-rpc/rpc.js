const RPC = require("discord-rpc");

const clientId = "1529385703346012280"; // dont touch

RPC.register(clientId);

const rpc = new RPC.Client({ transport: "ipc" });

rpc.on("ready", () => {
    console.log("RPC Connected!");

    rpc.setActivity({
        details: "made by yetzq!",
        state: "Playing",
        buttons: [{
            label: 'Crimson - Github!',
            url: 'https://githuub.com/yetzq7/Crimson-Backend'
        }]
    });
});

rpc.on("error", console.error);

rpc.login({ clientId }).catch(console.error);

//module.exports = rpc;
// properr