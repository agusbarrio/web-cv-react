import Navbar from './Navbar';

export default {
  title: 'Navbar',
  component: Navbar,
};

const Template = (args) => <Navbar {...args} />;

export const Active = Template.bind({});
Active.args = { active: true };

export const Inactive = Template.bind({});
Inactive.args = { active: false };
