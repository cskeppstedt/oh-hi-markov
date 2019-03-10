import { ITokenMap } from "../build-map/build-map";
export interface IGenerateOptions {
    tokenMap: ITokenMap;
    prefixLength: number;
    maxLength: number;
}
declare const _default: (options: IGenerateOptions) => string;
export default _default;
