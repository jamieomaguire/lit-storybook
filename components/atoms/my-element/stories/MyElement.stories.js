import { MyElement } from '../src/my-element';

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: 'Example/MyElement',
  // More on argTypes: https://storybook.js.org/docs/web-components/api/argtypes
  argTypes: {
    name: { type: 'text' },
    count: { type: 'text' }
  },
};

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template = (args) => new MyElement(args);

export const MyElementStory = Template.bind({});
// More on args: https://storybook.js.org/docs/web-components/writing-stories/args
MyElementStory.args = {
  name: 'Jamie',
  count: 0,
};