import { ITokenMap, START_TOKEN, makePrefix } from "../build-map/build-map";

export interface IGenerateOptions {
  tokenMap: ITokenMap;
  prefixLength: number;
  maxLength: number;
}

const randomInt = (maxExclusive: number) =>
  Math.floor(Math.random() * maxExclusive);

const withEndPunctuation = (str: string) => (str ? str + "." : str);

const withFirstCapitalized = (str: string) =>
  str ? str.slice(0, 1).toUpperCase() + str.slice(1) : str;

export default (options: IGenerateOptions) => {
  const { tokenMap = {}, prefixLength = 1, maxLength = 0 } = options || {};

  const sentence: string[] = [];
  for (let i = 0; i < maxLength; i++) {
    const prefix = makePrefix(sentence, prefixLength, i);
    const choices = tokenMap[prefix];

    if (!choices || choices.length === 0) {
      break;
    }

    const token = tokenMap[prefix][randomInt(choices.length)];

    if (token) {
      sentence.push(token);
    } else {
      break;
    }
  }

  return withEndPunctuation(withFirstCapitalized(sentence.join(" ")));
};
