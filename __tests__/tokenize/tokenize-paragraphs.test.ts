import tokenizeParagraphs from "../../lib/tokenize/tokenize-paragraphs";

test("null input", () => {
  expect(tokenizeParagraphs(null as any)).toEqual([]);
});

test("undefined input", () => {
  expect(tokenizeParagraphs(undefined as any)).toEqual([]);
});

test("empty array input", () => {
  expect(tokenizeParagraphs([])).toEqual([]);
});

test("empty string input", () => {
  expect(tokenizeParagraphs([""])).toEqual([]);
});

test("single word", () => {
  expect(tokenizeParagraphs(["Foo"])).toEqual([["foo"]]);
});

test("multiple paragraphs", () => {
  expect(tokenizeParagraphs(["Foo bar", "foo bar. baz!"])).toEqual([
    ["foo", "bar"],
    ["foo", "bar"],
    ["baz"]
  ]);
});
