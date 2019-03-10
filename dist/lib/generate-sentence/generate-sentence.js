"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var build_map_1 = require("../build-map/build-map");
var randomInt = function (maxExclusive) {
    return Math.floor(Math.random() * maxExclusive);
};
var withEndPunctuation = function (str) { return (str ? str + "." : str); };
var withFirstCapitalized = function (str) {
    return str ? str.slice(0, 1).toUpperCase() + str.slice(1) : str;
};
exports.default = (function (options) {
    var _a = options || {}, _b = _a.tokenMap, tokenMap = _b === void 0 ? {} : _b, _c = _a.prefixLength, prefixLength = _c === void 0 ? 1 : _c, _d = _a.maxLength, maxLength = _d === void 0 ? 0 : _d;
    var sentence = [];
    for (var i = 0; i < maxLength; i++) {
        var prefix = build_map_1.makePrefix(sentence, prefixLength, i);
        var choices = tokenMap[prefix];
        if (!choices || choices.length === 0) {
            break;
        }
        var token = tokenMap[prefix][randomInt(choices.length)];
        if (token) {
            sentence.push(token);
        }
        else {
            break;
        }
    }
    return withEndPunctuation(withFirstCapitalized(sentence.join(" ")));
});
