export const START_TOKEN = "__START_TOKEN__";

export interface ITokenMap {
  [key: string]: string[];
}

const addToMap = (map: ITokenMap, prefix: string, token: string) => {
  if (map[prefix]) {
    map[prefix].push(token);
  } else {
    map[prefix] = [token];
  }

  return map;
};

export const makePrefix = (
  sentence: string[],
  prefixLength: number,
  index: number
) => {
  const tokens = [];
  for (let i = index; i < prefixLength; i++) {
    tokens.push(START_TOKEN);
  }

  const from = index - prefixLength;
  const to = from + prefixLength;
  for (let j = Math.max(0, from); j < to; j++) {
    tokens.push(sentence[j]);
  }

  return tokens.join(" ");
};

export default (tokenizedSentences: string[][], prefixLength = 1) => {
  if (!tokenizedSentences) {
    return {};
  }

  return tokenizedSentences.reduce<ITokenMap>((currentMap, sentence) => {
    for (let i = 0; i < sentence.length; i++) {
      const token = sentence[i];
      const prefix = makePrefix(sentence, prefixLength, i);
      addToMap(currentMap, prefix, token);
    }

    return currentMap;
  }, {});
};
