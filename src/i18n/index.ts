import i18n from 'i18next';
import type { InitOptions } from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { setDocumentTitle } from '@/utils/setDocumentTitle';
import commonEN from './locales/en/common.json';
import commonCN from './locales/zh-TW/common.json';
import policyEN from './locales/en/policy.json';
import policyCN from './locales/zh-TW/policy.json';

export enum LanguageType {
  EN = 'en',
  ZH_CN = 'zh-CN',
}
export const resources = {
  [LanguageType.ZH_CN]: {
    common: commonCN,
    policy: policyCN,
  },
  [LanguageType.EN]: {
    common: commonEN,
    policy: policyEN,
  },
} as const;

const initOptions: InitOptions = {
  resources,
  fallbackLng: LanguageType.ZH_CN,
  // preload: [LanguageType.ZH_CN, LanguageType.EN],
  preload: [LanguageType.ZH_CN],
  interpolation: {
    escapeValue: false,
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init(initOptions)
  .then(() => {
    document.documentElement.lang = i18n.resolvedLanguage ?? LanguageType.ZH_CN;
    setDocumentTitle();
  });

i18n.on('languageChanged', (lang) => {
  document.documentElement.lang = lang;
});

export default i18n;
