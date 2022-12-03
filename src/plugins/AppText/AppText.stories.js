import AppText from './AppText.vue';

export default {
  title: 'Plugins/AppText',
  component: AppText,
  argTypes: {
    default: {
      control: {
        type: Text,
      },
      description: 'Slot Content',
      table: {
        type: {
          summary: null,
        },
      },
    },
  },
};

const Template = (args) => ({
  components: { AppText },
  setup() {
    return { args };
  },
  template: `
    <AppText v-bind="args">
      <template v-if="${'default' in args}" v-slot>
        ${args.default}
      </template>
    </AppText>
  `,
});

export const Default = Template.bind({});
Default.args = {
  default: 'App Text Storybook',
};

export const WithError = Template.bind({});
WithError.args = {
  default: 'App Text Storybook',
  tag: 'h2',
};
