import ImageLink from '.';

export default { title: 'ImageLink', component: ImageLink };

const Template = (args) => <ImageLink {...args} />;

export const HomeLink = Template.bind({});
HomeLink.args = { href: '/#', src: './logo.png', alt: 'Inicio' };
