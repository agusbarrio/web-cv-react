import HomeLink from './HomeLink';

export default { title: 'HomeLink', component: HomeLink };

const Template = (args) => <HomeLink {...args} />;
export const Default = Template.bind({});
Default.args = {};
