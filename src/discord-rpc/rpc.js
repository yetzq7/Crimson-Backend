const RPC = require("discord-rpc");

const clientId = "1529385703346012280";

RPC.register(clientId);

const rpc = new RPC.Client({ transport: "ipc" });

rpc.on("ready", () => {
    console.log("RPC Connected!");

    rpc.setActivity({
        details: "Crimson",
        state: "Playing",
        buttons: [{
            label: 'Github!',
            url: 'https://githuub.com/yetzq7/Crimson-Backend'
        }]
    });
});

rpc.on("error", console.error);

rpc.login({ clientId }).catch(console.error);

//module.exports = rpc;
// properr