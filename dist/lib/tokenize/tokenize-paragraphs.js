"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tokenize_paragraph_1 = __importDefault(require("./tokenize-paragraph"));
exports.default = (function (paragraphs) {
    if (!paragraphs) {
        return [];
    }
    return paragraphs.reduce(function (acc, paragraph) { return acc.concat(tokenize_paragraph_1.default(paragraph)); }, []);
});
