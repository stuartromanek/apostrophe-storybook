import Modal from '../../node_modules/apostrophe/modules/@apostrophecms/modal/ui/apos/components/AposModal.vue';

export default {
  component: Modal,
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary = {
  render: () => ({
    components: { Modal },
    template: '<Modal modal-title="hey nice modal" />',
  })
};