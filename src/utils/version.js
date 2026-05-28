const express = require("express");
const app = express();

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

app.get('', async (req, res) => {
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
                    seasonNumber: 10.20, // Or whatever build you are using
                    seasonTemplateId: "AthenaSeason:athenaseason12",
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