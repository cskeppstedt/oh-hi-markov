"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.START_TOKEN = "__START_TOKEN__";
var addToMap = function (map, prefix, token) {
    if (map[prefix]) {
        map[prefix].push(token);
    }
    else {
        map[prefix] = [token];
    }
    return map;
};
exports.makePrefix = function (sentence, prefixLength, index) {
    var tokens = [];
    for (var i = index; i < prefixLength; i++) {
        tokens.push(exports.START_TOKEN);
    }
    var from = index - prefixLength;
    var to = from + prefixLength;
    for (var j = Math.max(0, from); j < to; j++) {
        tokens.push(sentence[j]);
    }
    return tokens.join(" ");
};
exports.default = (function (tokenizedSentences, prefixLength) {
    if (prefixLength === void 0) { prefixLength = 1; }
    if (!tokenizedSentences) {
        return {};
    }
    return tokenizedSentences.reduce(function (currentMap, sentence) {
        for (var i = 0; i < sentence.length; i++) {
            var token = sentence[i];
            var prefix = exports.makePrefix(sentence, prefixLength, i);
            addToMap(currentMap, prefix, token);
        }
        return currentMap;
    }, {});
});
