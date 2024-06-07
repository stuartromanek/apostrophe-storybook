import { Preview } from '@storybook/vue3';
import { setup } from '@storybook/vue3';
import i18n from '../src/i18n';
import Wrapper from '../src/components/Wrapper.vue';

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
});