import React from 'react';

import PostCardWithPicture from '../../../components/Card/cardWithPicture';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Codelabz/CardWithPicture',
  component: PostCardWithPicture,
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
const Template = (args) => <PostCardWithPicture {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Default.args = {
    background: "red",
    color:"white",
};