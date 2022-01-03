"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const twit_1 = __importDefault(require("twit"));
const blagues_api_1 = __importDefault(require("blagues-api"));
dotenv_1.default.config();
const T = new twit_1.default({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});
async function getBlagues() {
    const blagues = new blagues_api_1.default(process.env.BLAGUE_TOKEN);
    const json = await blagues.random();
    const blague = `Type:\n${json.type}\n\nBlague:\n${json.joke}\n\nRéponse:${json.answer}`;
    T.post('statuses/update', { status: blague }, function (data) {
        console.log(data);
    });
}
getBlagues();
//# sourceMappingURL=index.js.map