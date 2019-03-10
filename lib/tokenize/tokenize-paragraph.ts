const PARAGRAPH_DELIMITER = "\\n";
const RE_SENTENCE_SPLIT = /[!?.]+/g;
const RE_WORD_SPLIT = /\s+/g;
const RE_PUNCTUATION_STRIP = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]+/g;
const RE_QUOTES = />>>/g;
const RE_CODE_QUOTES = /```/g;
const RE_SPOILERS = /\|\|[^|]+\|\|/g;
const RE_URL = /https?:\/\//gi;

const isNonEmptyString = (str: string) =>
  typeof str === "string" && str.trim().length > 0;

const isNonEmptyArray = (arr: any[]) => arr != null && arr.length > 0;

const hasURL = (paragraph: string) => RE_URL.test(paragraph);

const hasSpoilers = (paragraph: string) => RE_SPOILERS.test(paragraph);

const hasQuotes = (paragraph: string) => RE_QUOTES.test(paragraph);

const hasCodeQuotes = (paragraph: string) => RE_CODE_QUOTES.test(paragraph);

const normalizeWord = (word: string) =>
  word.replace(RE_PUNCTUATION_STRIP, "").toLowerCase();

export default (paragraph: string): string[][] => {
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
    .map(sentence =>
      sentence
        .split(RE_WORD_SPLIT)
        .map(normalizeWord)
        .filter(isNonEmptyString)
    )
    .filter(isNonEmptyArray);
};
