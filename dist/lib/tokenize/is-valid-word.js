"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RE_AT_MESSAGE = /<@!?\d+>/;
var RE_ANIMATED_EMOJI = /<a\:\w+\:\d+>/;
exports.default = (function (word) {
    if (RE_AT_MESSAGE.test(word)) {
        return false;
    }
    if (RE_ANIMATED_EMOJI.test(word)) {
        return false;
    }
    return true;
});
