import React from 'react';

import Header from './Header';

export default {
  title: 'Header',
  component: Header,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Header {...args} />;

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {};
