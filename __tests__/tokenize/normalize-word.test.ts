import normalizeWord from "../../lib/tokenize/normalize-word";

test("regular word", () => {
    expect(normalizeWord("test")).toEqual("test")
})

test("channel emoji", () => {
    expect(normalizeWord("<:monkaS:455805407932186646>")).toEqual(":monkaS:")
})