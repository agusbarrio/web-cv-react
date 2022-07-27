import HamburgerButton from '.';

export default { title: 'HamburgerButton', component: HamburgerButton };

const Template = (args) => (
  <div style={{ width: '100px', height: '100px', padding: '1rem' }}>
    <HamburgerButton {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  onToggle: (toggle) => {
    console.log('Click - Toggle state: ', toggle);
  },
};

export const IncorrectToggle = Template.bind({});
IncorrectToggle.args = {
  onToggle: 'Incorrect Toggle',
};
