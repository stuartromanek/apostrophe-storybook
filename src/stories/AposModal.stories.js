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
  render: (args) => ({
    components: { Modal },
    template: '<Modal :modal="{ active: true }" modalId="lewifn" modalTitle="Fun" />',
    setup() {
      console.log('setup');
      console.log(args);
      return args;
    },
  }),
  args: {
    // modalTitle: 'hey nice modal',
    active: true,
    modal: {
      'active': true
    },
    // props: {
    //   modal: {
    //     active: true
    //   }
    // },
    // modalId: 'wefwef'
  },
};