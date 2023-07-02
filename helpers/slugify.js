const charsMap = {
    а: 'a',
    б: 'b',
    в: 'v',
    г: 'g',
    д: 'd',
    е: 'e',
    ё: 'e',
    ж: 'j',
    з: 'z',
    и: 'i',
    й: 'i',
    к: 'k',
    л: 'l',
    м: 'm',
    н: 'n',
    о: 'o',
    п: 'p',
    р: 'r',
    с: 's',
    т: 't',
    у: 'u',
    ф: 'f',
    х: 'h',
    ц: 'c',
    ч: 'ch',
    ш: 'sh',
    щ: 'shch',
    ы: 'y',
    э: 'e',
    ю: 'u',
    я: 'ya',
};

const FALLBACK_REPLACER = '-';

const slugify = (source) => {
    const result = [];

    for (let i = 0; i < source.length; i += 1) {
        if (/[a-z0-9]/i.test(source[i])) {
            result.push(source[i].toLowerCase());
            continue;
        }

        result.push(charsMap[source[i].toLowerCase()] || FALLBACK_REPLACER);
    }

    return result.join('');
};

module.exports = { slugify }