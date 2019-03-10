const PARAGRAPH_DELIMITER = "\\n";
const RE_SENTENCE_SPLIT = /[!?.]+/g;
const RE_WORD_SPLIT = /\s+/g;
const RE_PUNCTUATION_STRIP = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]+/g;

const isNonEmptyString = (str: string) =>
  typeof str === "string" && str.trim().length > 0;

const isNonEmptyArray = (arr: any[]) => arr != null && arr.length > 0;

const hasURL = (paragraph: string) =>
  /(https?:\/\/|www\.\w+)/gi.test(paragraph);

const hasSpoilers = (paragraph: string) => /\|\|[^|]+\|\|/g.test(paragraph);

const hasQuotes = (paragraph: string) => />>>/g.test(paragraph);

const hasCodeQuotes = (paragraph: string) => /```/g.test(paragraph);

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
