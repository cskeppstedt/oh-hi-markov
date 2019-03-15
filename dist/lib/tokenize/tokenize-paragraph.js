"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var is_valid_word_1 = __importDefault(require("./is-valid-word"));
var normalize_word_1 = __importDefault(require("./normalize-word"));
var RE_SENTENCE_SPLIT = /[!?.]+/g;
var RE_WORD_SPLIT = /\s+/g;
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
            .filter(is_valid_word_1.default)
            .map(normalize_word_1.default)
            .filter(isNonEmptyString);
    })
        .filter(isNonEmptyArray);
});
