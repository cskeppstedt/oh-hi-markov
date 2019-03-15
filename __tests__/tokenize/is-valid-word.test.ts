import isValidWord from "../../lib/tokenize/is-valid-word";

test("valid word", () => {
    expect(isValidWord("test")).toBe(true)
})

test("@ messages", () => {
    expect(isValidWord("<@164814281660039168>")).toBe(false)
    expect(isValidWord("<@!164814281660039168>")).toBe(false)
})

test("@ messages", () => {
    expect(isValidWord("<@164814281660039168>")).toBe(false)
    expect(isValidWord("<@!164814281660039168>")).toBe(false)
})


test("animated emojis", () => {
    expect(isValidWord("<a:hyperclap:481301402707034123>")).toBe(false)
    expect(isValidWord("<a:COGGERS:512050310395723807>")).toBe(false)
})