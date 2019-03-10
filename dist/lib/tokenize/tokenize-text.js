"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tokenize_paragraphs_1 = __importDefault(require("./tokenize-paragraphs"));
exports.default = (function (text) {
    if (!text) {
        return [];
    }
    return tokenize_paragraphs_1.default(text.split("\n"));
});
