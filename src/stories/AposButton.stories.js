import Button from '../../node_modules/apostrophe/modules/@apostrophecms/ui/ui/apos/components/AposButton.vue';

export default {
  component: Button,
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary = {
  render: () => ({
    components: { Button },
    template: '<Button primary label="hey nice button" />',
  })
};