const express = require("express");
const app = express();

require("dotenv").config();

app.get('/fortnite/api/v2/versioncheck', async (req, res) => {
    res.status(200).send({
     type: "NO_UPDATE"
    });
});

app.get('/fortnite/api/v2/versioncheck/:version', async (req, res) =>{
    res.status(200).send({
     type: "NO_UPDATE"
    });
});

app.get('/fortnite/api/calendar/v1/timeline', async (req, res) => {
    res.status(200).send({
    channels: {
        "client-matchmaking": {
            states: [],
            cacheExpire: "9999-01-01T00:00:00.000Z"
        },
        "client-events": {
            states: [{
                validFrom: "0001-01-01T00:00:00.000Z",
                activeEvents: [],
                state: {
                    activeStorefronts: [],
                    eventNamedWeights: {},
                    seasonNumber: Number(process.env.VERSIONN), // Or whatever build you are ur on
                    seasonTemplateID: Number(process.env.ATHENASEASON),
                    matchXpBonusPoints: 0,
                    seasonBegin: "2020-01-01T00:00:00Z",
                    seasonEnd: "9999-01-01T00:00:00Z",
                    seasonDisplayedEnd: "9999-01-01T00:00:00Z",
                    weeklyStoreEnd: "9999-01-01T00:00:00Z",
                    stwEventStoreEnd: "9999-01-01T00:00:00.000Z",
                    stwWeeklyStoreEnd: "9999-01-01T00:00:00.000Z",
                    sectionStoreEnds: {
                        Featured: "9999-01-01T00:00:00.000Z"
                    },
                    dailyStoreEnd: "9999-01-01T00:00:00Z"
                }
            }],
            cacheExpire: "9999-01-01T00:00:00.000Z"
        }
     },
        eventsTimeOffsetHrs: 0,
     cacheIntervalMins: 10,
     currentTime: new Date().toISOString()
    });
});

module.exports = app;