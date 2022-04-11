import React from 'react';

import PrimarySearchAppBar from '../../../components/header/header';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Codelabz/header',
  component: PrimarySearchAppBar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    background: {
      control: "color",
    },
    color: {
      control: "color",
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <PrimarySearchAppBar {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Default.args = {
    background: "red",
    color:"white",
};