import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  locale: 'en',
  messages: {
    en: import('../node_modules/apostrophe/modules/@apostrophecms/i18n/i18n/en.json'),
  }
});

export default i18n;