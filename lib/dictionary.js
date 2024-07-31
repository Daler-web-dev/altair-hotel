import "server-only";

const dictionaries = {
    ru: () => import("@/langs/ru.json").then((module) => module.default),
    uz: () => import("@/langs/uz.json").then((module) => module.default),
};

export const getDictionary = async (locale) => dictionaries[locale]();
