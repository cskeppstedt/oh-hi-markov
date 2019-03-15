"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RE_PUNCTUATION_STRIP = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]+/g;
var RE_CHANNEL_EMOJI = /<(\:\w+\:)\d+>/;
var isChannelEmoji = function (word) { return RE_CHANNEL_EMOJI.test(word); };
var normalizeChannelEmoji = function (word) {
    var matches = word.match(RE_CHANNEL_EMOJI);
    if (matches && matches.length) {
        return matches[1];
    }
    return "";
};
exports.default = (function (word) {
    if (isChannelEmoji(word)) {
        return normalizeChannelEmoji(word);
    }
    return word.replace(RE_PUNCTUATION_STRIP, "").toLowerCase();
});
