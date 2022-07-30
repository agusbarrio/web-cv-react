import HamburgerButton from '.';
export default { title: 'HamburgerButton', component: HamburgerButton };

const Template = (args) => (
  <div style={{ width: '100px', height: '100px', padding: '1rem' }}>
    <HamburgerButton {...args} />
  </div>
);

export const ToggleOn = Template.bind({});
ToggleOn.args = { toggled: true };

export const ToggleOff = Template.bind({});
ToggleOff.args = { toggled: false };
