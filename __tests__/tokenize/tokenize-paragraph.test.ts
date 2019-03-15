import tokenizeParagraph from "../../lib/tokenize/tokenize-paragraph";

test("null input", () => {
  expect(tokenizeParagraph(null as any)).toEqual([]);
});

test("undefined input", () => {
  expect(tokenizeParagraph(undefined as any)).toEqual([]);
});

test("empty string input", () => {
  expect(tokenizeParagraph("")).toEqual([]);
});

test("single word", () => {
  expect(tokenizeParagraph("Foo")).toEqual([["foo"]]);
});

test("multiple words", () => {
  expect(tokenizeParagraph("fOO bAr Baz")).toEqual([["foo", "bar", "baz"]]);
});

test("multiple words with punctuation", () => {
  expect(tokenizeParagraph("'foo', \"bar\" - | _baz_")).toEqual([
    ["foo", "bar", "baz"]
  ]);
});

test("paragraph with punctuation", () => {
  expect(tokenizeParagraph("foo bar! baz beta foo.")).toEqual([
    ["foo", "bar"],
    ["baz", "beta", "foo"]
  ]);
});

test("paragraph with multiple punctuation and newlines", () => {
  expect(tokenizeParagraph("~ | Foo   baR!! \n\nbAz, beTa, foo.")).toEqual([
    ["foo", "bar"],
    ["baz", "beta", "foo"]
  ]);
});

test("paragraphs with url's are ignored", () => {
  expect(tokenizeParagraph("foo http://foo.com baz")).toEqual([]);
  expect(tokenizeParagraph("foo HTTP://foo.com baz")).toEqual([]);
  expect(tokenizeParagraph("foo https://foo.com baz")).toEqual([]);
  expect(tokenizeParagraph("foo www.foo.com baz")).toEqual([]);
});

test("paragraphs with code quotes are ignored", () => {
  expect(tokenizeParagraph("```foo bar baz```")).toEqual([]);
});

test("paragraphs with quotes are ignored", () => {
  expect(tokenizeParagraph(">>> foo bar baz")).toEqual([]);
});

test("paragraphs with spoilers are ignored", () => {
  expect(tokenizeParagraph("foo ||bar baz||")).toEqual([]);
});
