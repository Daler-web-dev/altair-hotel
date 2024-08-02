import "server-only";

const dictionaries = {
    ru: () => import("@/langs/ru.json").then((module) => module.default),
    en: () => import("@/langs/en.json").then((module) => module.default),
};

export const getDictionary = async (locale) => dictionaries[locale]();
