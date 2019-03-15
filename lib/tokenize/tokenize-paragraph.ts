import isValidWord from "./is-valid-word";
import normalizeWord from "./normalize-word";

const RE_SENTENCE_SPLIT = /[!?.]+/g;
const RE_WORD_SPLIT = /\s+/g;

const isNonEmptyString = (str: string) =>
  typeof str === "string" && str.trim().length > 0;

const isNonEmptyArray = (arr: any[]) => arr != null && arr.length > 0;

const hasURL = (paragraph: string) =>
  /(https?:\/\/|www\.\w+)/gi.test(paragraph);

const hasSpoilers = (paragraph: string) => /\|\|[^|]+\|\|/g.test(paragraph);

const hasQuotes = (paragraph: string) => />>>/g.test(paragraph);

const hasCodeQuotes = (paragraph: string) => /```/g.test(paragraph);

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
        .filter(isValidWord)
        .map(normalizeWord)
        .filter(isNonEmptyString)
    )
    .filter(isNonEmptyArray);
};
