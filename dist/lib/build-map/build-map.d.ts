export declare const START_TOKEN = "__START_TOKEN__";
export interface ITokenMap {
    [key: string]: string[];
}
export declare const makePrefix: (sentence: string[], prefixLength: number, index: number) => string;
declare const _default: (tokenizedSentences: string[][], prefixLength?: number) => ITokenMap;
export default _default;
