const express = require("express");
const fetch = require("node-fetch").default;
const app = express();


app.use(express.json());

const athenaProfiles = {};


const routes = [
    "QueryProfile", "ClientQuestLogin", "RefreshExpeditions",
    "GetMcpTimeForRealTimeTasks", "UpdateNamedCounters"
];

function buildCommonPublicProfile(accountId) {
    return {
        _id: "common_public",
        accountId,
        profileId: "common_public",
        version: "no_version",
        wipeNumber: 1,
        created: "2020-01-01T00:00:00.000Z",
        updated: new Date().toISOString(),
        revision: 0,
        commandRevision: 0,
        stats: { attributes: {} },
        items: {}
    };
}

async function buildAthenaProfile(accountId) {
    const res = await fetch("https://raw.githubusercontent.com/Lawin0129/LawinServer/refs/heads/main/profiles/athena.json");
    const json = await res.json();

    return {
        _id: "athena",
        accountId,
        profileId: "athena",
        version: "no_version",
        wipeNumber: 1,
        created: "2020-01-01T00:00:00.000Z",
        updated: new Date().toISOString(),
        revision: 1,
        commandRevision: 1,
        stats: {
            attributes: {
                season_num: 8,
                banner_icon: "BRSeason01",
                banner_color: "DefaultColor1",
                favorite_character: "AthenaCharacter:CID_001_Athena_Commando_M_Banana", 
                favorite_backpack: "",
                favorite_pickaxe: "AthenaPickaxe:DefaultPickaxe",
                favorite_glider: "AthenaGlider:DefaultGlider",
                favorite_skydivecontrail: "",
                favorite_musicpack: "",
                favorite_loadingscreen: "",
                favorite_dance: ["AthenaDance:EID_Floss", "", "", "", "", ""],
                favorite_itemwraps: ["", "", "", "", "", "", ""]
            }
        },
        items: json.items && typeof json.items === "object" ? json.items : {}
    };
}


async function getAthenaProfile(accountId) {
    if (!athenaProfiles[accountId]) {
        athenaProfiles[accountId] = await buildAthenaProfile(accountId);
    }

    return athenaProfiles[accountId];
}

function buildCommonCoreProfile(accountId) {
    const bannerIcons = [
        "StandardBanner1","StandardBanner2","StandardBanner3","StandardBanner4",
        "StandardBanner5","StandardBanner6","StandardBanner7","StandardBanner8",
        "StandardBanner9","StandardBanner10","StandardBanner11","StandardBanner12",
        "StandardBanner13","StandardBanner14","StandardBanner15","StandardBanner16",
        "StandardBanner17","StandardBanner18","StandardBanner19","StandardBanner20",
        "StandardBanner21","StandardBanner22","StandardBanner23","StandardBanner24",
        "StandardBanner25","StandardBanner26","StandardBanner27","StandardBanner28",
        "StandardBanner29","StandardBanner30","StandardBanner31",
        "OtherBanner1","OtherBanner2","OtherBanner3","OtherBanner4",
        "OtherBanner5","OtherBanner6","OtherBanner7","OtherBanner8",
        "OtherBanner9","OtherBanner10","OtherBanner11","OtherBanner12",
        "OtherBanner13","OtherBanner14","OtherBanner15","OtherBanner16",
        "OtherBanner17","OtherBanner18","OtherBanner19","OtherBanner20",
        "OtherBanner21","OtherBanner22","OtherBanner23","OtherBanner24",
        "OtherBanner25","OtherBanner26","OtherBanner27","OtherBanner28",
        "BRSeason01",
        "BRSeason02Bush","BRSeason02Salt","BRSeason02LionHerald",
        "BRSeason02CatSoldier","BRSeason02Dragon","BRSeason02Planet",
        "BRSeason03Bee","BRSeason03Shark","BRSeason03Wolf",
        "BRSeason03Eagle","BRSeason03Snake","BRSeason03Sun",
        "BRSeason04Blitz","BRSeason04Bow","BRSeason04Chains",
        "BRSeason04Duck","BRSeason04Fish","BRSeason04HeroEmblem",
        "BRSeason04VillainEmblem",
        "BRSeason05Balloon","BRSeason05Barrel","BRSeason05Binoculars",
        "BRSeason05Cobra","BRSeason05Dinosaur","BRSeason05Dolphin",
        "BRSeason05FlowyHat","BRSeason05Golf","BRSeason05IceCreamTruck",
        "BRSeason05Kitsune","BRSeason05Palms","BRSeason05RacingCheckers",
        "BRSeason05Ribbon","BRSeason05ScubaGear","BRSeason05ShoppingCart",
        "BRSeason05SpiderBadass","BRSeason05TicTacToe","BRSeason05VikingShip",
        "BRSeason05Crown","BRSeason05Glyph",
        "FounderTier1Banner1","FounderTier1Banner2","FounderTier1Banner3","FounderTier1Banner4",
        "FounderTier2Banner1","FounderTier2Banner2","FounderTier2Banner3",
        "FounderTier3Banner1","FounderTier3Banner2","FounderTier3Banner3",
        "FounderTier4Banner1","FounderTier4Banner2",
        "FounderTier5Banner1","FounderTier5Banner2"
    ];

    const bannerColors = [
        "DefaultColor1","DefaultColor2","DefaultColor3","DefaultColor4",
        "DefaultColor5","DefaultColor6","DefaultColor7","DefaultColor8",
        "DefaultColor9","DefaultColor10","DefaultColor11","DefaultColor12",
        "DefaultColor13","DefaultColor14","DefaultColor15","DefaultColor16",
        "DefaultColor17","DefaultColor18","DefaultColor19","DefaultColor20",
        "DefaultColor21"
    ];

    const items = {};

    for (const icon of bannerIcons) {
        items[`HomebaseBannerIcon:${icon}`] = {
            templateId: `HomebaseBannerIcon:${icon}`,
            attributes: { item_seen: true },
            quantity: 1
        };
    }

    for (const color of bannerColors) {
        items[`HomebaseBannerColor:${color}`] = {
            templateId: `HomebaseBannerColor:${color}`,
            attributes: { item_seen: true },
            quantity: 1
        };
    }

    return {
        _id: "common_core",
        accountId,
        profileId: "common_core",
        version: "no_version",
        wipeNumber: 1,
        created: "2020-01-01T00:00:00.000Z",
        updated: new Date().toISOString(),
        revision: 1,
        commandRevision: 1,
        stats: {
            attributes: {
                epicDisplayName: accountId,
                mtx_affiliate: "",
                mtx_affiliate_set_time: "",
                current_mtx_platform: "EpicPC",
                mtx_purchase_history: {},
                vbucks: 100
            }
        },
        items
    };
}

for (const route of routes) {
    app.post(`/fortnite/api/game/v2/profile/:accountId/client/${route}`, async (req, res) => {
        const { accountId } = req.params;
        const { profileId, rvn = 0 } = req.query;

        let profile;
    switch (profileId) {
    case "athena":
        profile = await getAthenaProfile(accountId);
        break;
    case "common_core":
        profile = buildCommonCoreProfile(accountId);
        break;
    default:
        profile = buildCommonPublicProfile(accountId);
        break;
}


        return res.status(200).json({
           profileRevision: Number(rvn),
            profileId,
            profileChangesBaseRevision: Number(rvn),
            profileChanges: [
    {
        changeType: "fullProfileUpdate",
        profile: profile
    }
],
            profileCommandRevision: 1,
            serverTime: new Date().toISOString(),
            responseVersion: 1
        });
    });
}

app.post('/fortnite/api/game/v2/profile/:accountId/client/EquipBattleRoyaleCustomization', async (req, res) => {
    const { accountId } = req.params;
    const { profileId, rvn = 0 } = req.query;

    if (profileId !== "athena") {
        return res.status(400).json({
            errorCode: "errors.com.epicgames.modules.profiles.invalid_command",
            errorMessage: `EquipBattleRoyaleCustomization is not valid on ${profileId} profile`,
            numericErrorCode: 10282
        });
    }

    const profile = await getAthenaProfile(accountId);

    const {
        slotName = "",
        itemToSlot = "",
        indexWithinSlot = 0
    } = req.body;

    const slotMap = {
        Character: "favorite_character",
        Backpack: "favorite_backpack",
        Pickaxe: "favorite_pickaxe",
        Glider: "favorite_glider",
        SkyDiveContrail: "favorite_skydivecontrail",
        MusicPack: "favorite_musicpack",
        LoadingScreen: "favorite_loadingscreen",
        Dance: "favorite_dance",
        ItemWrap: "favorite_itemwraps"
    };

    const statName = slotMap[slotName];

    if (!statName) {
        return res.status(200).json({
            profileRevision: Number(rvn),
            profileId,
            profileChangesBaseRevision: Number(rvn),
            profileChanges: [],
            profileCommandRevision: Number(rvn),
            serverTime: new Date().toISOString(),
            responseVersion: 1
        });
    }

    if (slotName === "Dance") {
        if (!Array.isArray(profile.stats.attributes.favorite_dance)) {
            profile.stats.attributes.favorite_dance = ["", "", "", "", "", ""];
        }

        profile.stats.attributes.favorite_dance[indexWithinSlot] = itemToSlot;
    }
    else if (slotName === "ItemWrap") {
        if (!Array.isArray(profile.stats.attributes.favorite_itemwraps)) {
            profile.stats.attributes.favorite_itemwraps = ["", "", "", "", "", "", ""];
        }

        profile.stats.attributes.favorite_itemwraps[indexWithinSlot] = itemToSlot;
    }
    else {
        profile.stats.attributes[statName] = itemToSlot;
    }

    profile.revision++;
    profile.commandRevision++;
    profile.updated = new Date().toISOString();

    return res.status(200).json({
        profileRevision: profile.revision,
        profileId,
        profileChangesBaseRevision: Number(rvn),
        profileChanges: [{
            changeType: "statModified",
            name: statName,
            value: profile.stats.attributes[statName]
        }],
        profileCommandRevision: profile.commandRevision,
        serverTime: new Date().toISOString(),
        responseVersion: 1
    });
});

app.post('/fortnite/api/game/v2/profile/fortnite/client/SetMtxPlatform', async (req, res) => {
    const { profileId = "common_core", rvn = 0 } = req.query;
    const { itemIds = [] } = req.body;

    const profileChanges = itemIds.map(itemId => ({
        changeType: "itemAttrChanged",
        itemId,
        attributeName: "item_seen",
        attributeValue: true
    }));

    return res.status(200).json({
        profileRevision: Number(rvn) + 1,
        profileId,
        profileChangesBaseRevision: Number(rvn),
        profileChanges,
        profileCommandRevision: Number(rvn) + 1,
        serverTime: new Date().toISOString(),
        responseVersion: 1
    });
});

app.post('/fortnite/api/game/v2/profile/:accountId/client/MarkItemSeen', async (req, res) => {
    const { profileId, rvn = 0 } = req.query;
    const { itemIds = [] } = req.body;

    const profileChanges = itemIds.map(itemId => ({
        changeType: "itemAttrChanged",
        itemId,
        attributeName: "item_seen",
        attributeValue: true
    }));

    return res.status(200).json({
        profileRevision: Number(rvn) + 1,
        profileId,
        profileChangesBaseRevision: Number(rvn),
        profileChanges,
        profileCommandRevision: Number(rvn) + 1,
        serverTime: new Date().toISOString(),
        responseVersion: 1
    });
});

app.post('/fortnite/api/game/v2/profile/:accountId/client/SetItemFavoriteStatusBatch', async (req, res) => {
    const { profileId, rvn = 0 } = req.query;

    if (profileId !== "athena") {
        return res.status(400).json({
            errorCode: "errors.com.epicgames.modules.profiles.invalid_command",
            errorMessage: `SetItemFavoriteStatusBatch is not valid on ${profileId} profile`,
            numericErrorCode: 10282
        });
    }

    const { itemIds = [], itemFavStatus = [] } = req.body;

    const profileChanges = itemIds.map((itemId, i) => ({
        changeType: "itemAttrChanged",
        itemId,
        attributeName: "favorite",
        attributeValue: itemFavStatus[i] ?? false
    }));

    return res.status(200).json({
        profileRevision: Number(rvn) + 1,
        profileId,
        profileChangesBaseRevision: Number(rvn),
        profileChanges,
        profileCommandRevision: Number(rvn) + 1,
        serverTime: new Date().toISOString(),
        responseVersion: 1
    });
});

// SetBattleRoyaleBanner yay
app.post('/fortnite/api/game/v2/profile/:accountId/client/SetBattleRoyaleBanner', async (req, res) => {
    const { profileId, rvn = 0 } = req.query;

    if (profileId !== "athena") {
        return res.status(400).json({
            errorCode: "errors.com.epicgames.modules.profiles.invalid_command",
            errorMessage: `SetBattleRoyaleBanner is not valid on ${profileId} profile`,
            numericErrorCode: 10282
        });
    }
// is user jewish

    const { homebaseBannerColorId = "", homebaseBannerIconId = "" } = req.body;

    return res.status(200).json({
        profileRevision: Number(rvn) + 1,
        profileId,
        profileChangesBaseRevision: Number(rvn),
        profileChanges: [
            { changeType: "statModified", name: "banner_color", value: homebaseBannerColorId },
            { changeType: "statModified", name: "banner_icon",  value: homebaseBannerIconId  }
        ],
        profileCommandRevision: Number(rvn) + 1,
        serverTime: new Date().toISOString(),
        responseVersion: 1
    });
});

module.exports = app;