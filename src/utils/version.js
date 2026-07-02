const express = require("express");
const app = express();

require("dotenv").config();

app.get('/fortnite/api/v2/versioncheck', async (req, res) => {
    res.status(200).send({
     type: "NO_UPDATE"
    });
});

app.get('/fortnite/api/v2/versioncheck/:version', async (req, res) => {
    res.status(200).send({
     type: "NO_UPDATE"
    });
});

app.get('/fortnite/api/v2/versioncheck/:platform', async (req, res) => {
     res.status(200).send({
     type: "NO_UPDATE"
    });
});

const SEASON = process.env.SEASON;

app.get('/fortnite/api/calendar/v1/timeline', async (req, res) => {

    const season =  process.env.SEASON;
    const lobby = `LobbySeason${season}`;

    res.status(200).send({
        channels: {
            "client-matchmaking": {
                states: [],
                cacheExpire: "9999-01-01T00:00:00.000Z"
            },
            "client-events": {
                states: [
                    {
                        validFrom: "0001-01-01T00:00:00.000Z",
                        activeEvents: [
                            {
                                eventType: `EventFlag.Season${season}`,
                                activeUntil: "9999-01-01T00:00:00.000Z",
                                activeSince: "2020-01-01T00:00:00.000Z"
                            },
                            {
                                eventType: `EventFlag.${lobby}`,
                                activeUntil: "9999-01-01T00:00:00.000Z",
                                activeSince: "2020-01-01T00:00:00.000Z"
                            }
                        ],
                        state: {
                            activeStorefronts: [],
                            eventNamedWeights: {},
                            seasonNumber: season,
                            seasonTemplateId: `AthenaSeason:athenaseason${season}`,
                            matchXpBonusPoints: 10,
                            seasonBegin: "2020-01-01T00:00:00Z",
                            seasonEnd: "9999-01-01T00:00:00Z",
                            seasonDisplayedEnd: "9999-01-01T00:00:00Z",
                            weeklyStoreEnd: "2023-08-05T23:59:00.000Z",
                            stwEventStoreEnd: "9999-01-01T00:00:00.000Z",
                            stwWeeklyStoreEnd: "9999-01-01T00:00:00.000Z",
                            sectionStoreEnds: {
                                Featured: "2023-08-05T23:59:00.000Z"
                            },
                            dailyStoreEnd: "2023-08-05T23:59:00.000Z"
                        }
                    }
                ],
                cacheExpire: "9999-01-01T00:00:00.000Z"
            }
        },
        cacheIntervalMins: 10,
        currentTime: new Date().toISOString()
    });
});

module.exports = app;