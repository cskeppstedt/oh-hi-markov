const RE_PUNCTUATION_STRIP = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]+/g;
const RE_CHANNEL_EMOJI = /<(\:\w+\:)\d+>/;

const isChannelEmoji = (word: string) => RE_CHANNEL_EMOJI.test(word)
const normalizeChannelEmoji = (word: string) => {
    const matches = word.match(RE_CHANNEL_EMOJI)
    if (matches && matches.length) {
        return matches[1];
    }
    return "";
}

export default (word: string) => {
    if (isChannelEmoji(word)) {
        return normalizeChannelEmoji(word)
    }
    return word.replace(RE_PUNCTUATION_STRIP, "").toLowerCase();
}
