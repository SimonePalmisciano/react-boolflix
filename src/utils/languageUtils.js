import "flag-icons/css/flag-icons.min.css";

function languageUtils(langCode) {
    const languageToCode = {
    en: "us",
    it: "it",
    fr: "fr",
    es: "es",
    de: "de",
    };

    const countryCode = languageToCode[langCode];

    if (!countryCode) {
        return 'us';
    }

    return `fi fi-${countryCode}`;
}

export default languageUtils;