import tokenizeParagraph from "./tokenize-paragraph";

export default (paragraphs: string[]): string[][] => {
  if (!paragraphs) {
    return [];
  }

  return paragraphs.reduce<string[][]>(
    (acc, paragraph) => acc.concat(tokenizeParagraph(paragraph)),
    []
  );
};
