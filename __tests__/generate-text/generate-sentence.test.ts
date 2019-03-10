import generateSentence from "../../lib/generate-text/generate-sentence";
import { START_TOKEN } from "../../lib/build-map/build-map";

test("null input", () => {
  expect(generateSentence(null as any)).toEqual("");
});

test("undefined input", () => {
  expect(generateSentence(undefined as any)).toEqual("");
});

test("single token map", () => {
  expect(
    generateSentence({
      tokenMap: { [START_TOKEN]: ["foo"] },
      prefixLength: 1,
      maxLength: 1
    })
  ).toEqual("Foo.");
});

test("should stop if running out of choices", () => {
  expect(
    generateSentence({
      tokenMap: { [START_TOKEN]: ["foo"] },
      prefixLength: 1,
      maxLength: 2
    })
  ).toEqual("Foo.");
});

test("multiple token map", () => {
  expect(
    generateSentence({
      tokenMap: {
        [START_TOKEN]: ["foo"],
        foo: ["bar"]
      },
      prefixLength: 1,
      maxLength: 2
    })
  ).toEqual("Foo bar.");
});

test("with prefixLength=2: multiple token map", () => {
  expect(
    generateSentence({
      tokenMap: {
        [`${START_TOKEN} ${START_TOKEN}`]: ["foo"],
        [`${START_TOKEN} foo`]: ["bar"],
        [`foo bar`]: ["baz"]
      },
      prefixLength: 2,
      maxLength: 3
    })
  ).toEqual("Foo bar baz.");
});

test("with prefixLength=2: should stop if running out of choices", () => {
  expect(
    generateSentence({
      tokenMap: {
        [`${START_TOKEN} ${START_TOKEN}`]: ["foo"],
        [`${START_TOKEN} foo`]: ["bar"],
        [`foo bar`]: ["baz"]
      },
      prefixLength: 2,
      maxLength: 10
    })
  ).toEqual("Foo bar baz.");
});
