import { Story, Meta } from '@storybook/react';
import { InputBasic, InputBasicProps } from '../components/InputBasic';

export default {
  component: InputBasic,
  title: 'Inputs',
} as Meta;

const Template: Story<InputBasicProps> = (args) => <InputBasic {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  metadata: {
    type: 'email',
    name: 'email',
    id: 'email',
    className:
      'shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md',
    placeholder: 'you@example.com',
  },
  label: {
    text: 'email',
    className: 'block text-sm font-medium text-gray-700 capitalize',
  },
  e2eAttr: 'input-basic--label',
};

export const NotLabel = Template.bind({});
NotLabel.args = {
  metadata: {
    type: 'number',
    name: 'phone',
    id: 'phone',
    className:
      'shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md',
    placeholder: '+57 3002304543',
  },
  label: {
    text: '',
    className: '',
  },
  e2eAttr: 'input-basic',
};
