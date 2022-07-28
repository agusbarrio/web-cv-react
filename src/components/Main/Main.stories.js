import Main from '.';

export default {
  title: 'Main',
  component: Main,
};

const Template = (args) => <Main {...args} />;

export const Default = Template.bind({});
Default.args = {};
