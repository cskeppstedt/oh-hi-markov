import tokenizeText from "../../lib/tokenize/tokenize-text";

test("null input", () => {
  expect(tokenizeText(null as any)).toEqual([]);
});

test("undefined input", () => {
  expect(tokenizeText(undefined as any)).toEqual([]);
});

test("empty string input", () => {
  expect(tokenizeText("")).toEqual([]);
});

test("single word", () => {
  expect(tokenizeText("Foo")).toEqual([["foo"]]);
});

test("multiple paragraphs", () => {
  expect(tokenizeText("Foo bar\nfoo bar. baz!")).toEqual([
    ["foo", "bar"],
    ["foo", "bar"],
    ["baz"]
  ]);
});
