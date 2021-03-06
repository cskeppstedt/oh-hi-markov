"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tokenize_paragraph_1 = require("./tokenize/tokenize-paragraph");
exports.tokenizeParagraph = tokenize_paragraph_1.default;
var tokenize_paragraphs_1 = require("./tokenize/tokenize-paragraphs");
exports.tokenizeParagraphs = tokenize_paragraphs_1.default;
var tokenize_text_1 = require("./tokenize/tokenize-text");
exports.tokenizeText = tokenize_text_1.default;
var build_map_1 = require("./build-map/build-map");
exports.buildMap = build_map_1.default;
var generate_sentence_1 = require("./generate-sentence/generate-sentence");
exports.generateSentence = generate_sentence_1.default;
