const RE_AT_MESSAGE = /<@!?\d+>/;
const RE_ANIMATED_EMOJI = /<a\:\w+\:\d+>/;

export default (word: string) => {
    if (RE_AT_MESSAGE.test(word)) {
        return false;
    }

    if (RE_ANIMATED_EMOJI.test(word)) {
        return false;
    }

    return true;
}
