import NavbarLink from '.';

export default {
  title: 'NavbarLink',
  component: NavbarLink,
};

const Template = (args) => <NavbarLink {...args} />;

export const Default = Template.bind({});
Default.args = {
  textContent: 'My Button',
  onClick: () => {
    console.log('NavbarLink click');
  },
};
