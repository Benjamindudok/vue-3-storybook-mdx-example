import HelloWorld from '../components/HelloWorld.vue';
import { Story } from '@storybook/vue3';

export default {
  title: 'Example/Hello world',
  component: HelloWorld
};

const Template: Story = (args: any) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { HelloWorld },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<hello-world v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  msg: 'This is an example message from typescript'
}