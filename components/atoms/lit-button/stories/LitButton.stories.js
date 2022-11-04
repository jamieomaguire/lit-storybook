import { html } from 'lit';
import '../src/lit-button';

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: 'Example/LitButton',
  // More on argTypes: https://storybook.js.org/docs/web-components/api/argtypes
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template = ({ size }) => {
  return html`
    <lit-button size=${size}>
      Hello, Clarice
    </lit-button>
  `;
};

export const LitButtonStory = Template.bind({});

// More on args: https://storybook.js.org/docs/web-components/writing-stories/args
LitButtonStory.args = {
  size: 'large'
};