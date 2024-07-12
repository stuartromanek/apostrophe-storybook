import { Preview } from '@storybook/vue3';
import { setup } from '@storybook/vue3';
import { createI18n } from 'vue-i18n';
import { createPinia } from 'pinia';
import Wrapper from '../src/components/Wrapper.vue';
import en from '../node_modules/apostrophe/modules/@apostrophecms/i18n/i18n/en.json';

const i18n = createI18n({
  locale: 'en',
  messages: {
    en
  }
});

const pinia = createPinia();

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (story) => ({
      components: { story, Wrapper },
      template: '<Wrapper><story /></Wrapper>'
    })
  ]
};

export default preview;

setup((app) => {
  app.use(i18n);
  app.use(pinia);
});