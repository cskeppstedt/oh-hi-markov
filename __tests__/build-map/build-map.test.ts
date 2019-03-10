import buildMap, {
  START_TOKEN,
  makePrefix
} from "../../lib/build-map/build-map";

test("makePrefix", () => {
  expect(makePrefix(["foo", "bar", "baz"], 1, 0)).toEqual(START_TOKEN);
  expect(makePrefix(["foo", "bar", "baz"], 1, 1)).toEqual("foo");
  expect(makePrefix(["foo", "bar", "baz"], 1, 2)).toEqual("bar");
});

test("with prefixLength=2: makePrefix", () => {
  expect(makePrefix(["foo", "bar", "baz"], 2, 0)).toEqual(
    [START_TOKEN, START_TOKEN].join(" ")
  );

  expect(makePrefix(["foo", "bar", "baz"], 2, 1)).toEqual(
    [START_TOKEN, "foo"].join(" ")
  );

  expect(makePrefix(["foo", "bar", "baz"], 2, 2)).toEqual(
    ["foo", "bar"].join(" ")
  );
});

test("null input", () => {
  expect(buildMap(null as any)).toEqual({});
});

test("undefined input", () => {
  expect(buildMap(undefined as any)).toEqual({});
});

test("empty input", () => {
  expect(buildMap([])).toEqual({});
});

test("single sentence, single token", () => {
  expect(buildMap([["foo"]])).toEqual({
    [START_TOKEN]: ["foo"]
  });
});

test("single sentence, multiple tokens", () => {
  expect(buildMap([["foo", "bar", "baz"]])).toEqual({
    [START_TOKEN]: ["foo"],
    foo: ["bar"],
    bar: ["baz"]
  });
});

test("multiple sentences, multiple tokens", () => {
  expect(
    buildMap([["foo", "bar", "baz"], ["bar", "baz"], ["foo", "baz"]])
  ).toEqual({
    [START_TOKEN]: ["foo", "bar", "foo"],
    foo: ["bar", "baz"],
    bar: ["baz", "baz"]
  });
});

test("with prefixlength = 2: single sentence, single token", () => {
  expect(buildMap([["foo"]], 2)).toEqual({
    [`${START_TOKEN} ${START_TOKEN}`]: ["foo"]
  });
});

test("with prefixlength = 2: single sentence, multiple tokens", () => {
  expect(buildMap([["foo", "bar", "baz"]], 2)).toEqual({
    [`${START_TOKEN} ${START_TOKEN}`]: ["foo"],
    [`${START_TOKEN} foo`]: ["bar"],
    "foo bar": ["baz"]
  });
});

test("with prefixlength = 2: multiple sentences, multiple tokens", () => {
  expect(
    buildMap(
      [["foo", "bar", "baz"], ["bar", "baz", "alpha"], ["bar", "baz", "beta"]],
      2
    )
  ).toEqual({
    [`${START_TOKEN} ${START_TOKEN}`]: ["foo", "bar", "bar"],
    [`${START_TOKEN} foo`]: ["bar"],
    [`${START_TOKEN} bar`]: ["baz", "baz"],
    "foo bar": ["baz"],
    "bar baz": ["alpha", "beta"]
  });
});
