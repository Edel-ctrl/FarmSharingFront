import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// импортируем i18next для работы с переводами (локализацией)
// + initReactI18next для интеграции ( инициализации ) i18next
// с React (например, для использования хука useTranslation)

i18n.use(initReactI18next).init({
    lng: 'ru',
    resources: {
        ru: {
            translation: {
                header: {
                    search: 'Поиск',
                    sell: 'Продать свою продукцию',
                },
            },
        },
        en: {
            translation: {
                header: {
                    search: 'Search',
                    sell: 'Sell your mockProducts',
                },
            },
        },
    },
});

export const useTranslation = () => {
    return i18n;
};