import tokenizeParagraphs from "./tokenize-paragraphs";

export default (text: string): string[][] => {
  if (!text) {
    return [];
  }

  return tokenizeParagraphs(text.split("\n"));
};
