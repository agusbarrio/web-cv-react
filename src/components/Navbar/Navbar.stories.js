import React from 'react';

import Navbar from './Navbar';

export default {
  title: 'Navbar',
  component: Navbar,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Navbar {...args} />;

//👇 Each story then reuses that template
export const Active = Template.bind({});
Active.args = { active: true };
export const Inactive = Template.bind({});
Inactive.args = { active: false };
