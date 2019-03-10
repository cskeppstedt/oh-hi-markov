"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PARAGRAPH_DELIMITER = "\\n";
var RE_SENTENCE_SPLIT = /[!?.]+/g;
var RE_WORD_SPLIT = /\s+/g;
var RE_PUNCTUATION_STRIP = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]+/g;
var isNonEmptyString = function (str) {
    return typeof str === "string" && str.trim().length > 0;
};
var isNonEmptyArray = function (arr) { return arr != null && arr.length > 0; };
var hasURL = function (paragraph) {
    return /(https?:\/\/|www\.\w+)/gi.test(paragraph);
};
var hasSpoilers = function (paragraph) { return /\|\|[^|]+\|\|/g.test(paragraph); };
var hasQuotes = function (paragraph) { return />>>/g.test(paragraph); };
var hasCodeQuotes = function (paragraph) { return /```/g.test(paragraph); };
var normalizeWord = function (word) {
    return word.replace(RE_PUNCTUATION_STRIP, "").toLowerCase();
};
exports.default = (function (paragraph) {
    if (!isNonEmptyString(paragraph)) {
        return [];
    }
    if (hasQuotes(paragraph)) {
        return [];
    }
    if (hasCodeQuotes(paragraph)) {
        return [];
    }
    if (hasSpoilers(paragraph)) {
        return [];
    }
    if (hasURL(paragraph)) {
        return [];
    }
    return paragraph
        .split(RE_SENTENCE_SPLIT)
        .map(function (sentence) {
        return sentence
            .split(RE_WORD_SPLIT)
            .map(normalizeWord)
            .filter(isNonEmptyString);
    })
        .filter(isNonEmptyArray);
});
