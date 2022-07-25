import HamburgerButton from './HamburgerButton';

export default { title: 'HamburgerButton', component: HamburgerButton };

const Template = (args) => (
  <div style={{ width: '100px', height: '100px', padding: '1rem' }}>
    <HamburgerButton {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = { iconSize: 36 };
