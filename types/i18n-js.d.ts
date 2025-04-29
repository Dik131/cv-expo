declare module 'i18n-js' {
  export interface Translations {
    [key: string]: any;
  }
  export default class I18n {
    static translations: Translations;
    static locale: string;
    static fallbacks: boolean;
    static t(key: string, options?: any): string;
    locale: string;
    fallbacks: boolean;
    translations: Translations;
    t(key: string, options?: any): string;
  }
}

declare module '*.json';

declare const i18n: {
  translations: { [key: string]: any };
  locale: string;
  fallbacks: boolean;
  t: (key: string, options?: any) => string;
};
export default i18n;
