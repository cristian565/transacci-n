import { Story, Meta } from '@storybook/react';
import { Details, DetailsProps } from '../components/Details';

export default {
  component: Details,
  title: 'Table details',
} as Meta;

const Template: Story<DetailsProps> = (args) => <Details {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  onClose: () => {
    alert('the button was clicked');
  },
  e2eAttr: "Table details"
};

