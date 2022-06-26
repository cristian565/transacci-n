import { Story, Meta } from '@storybook/react';
import { Select,SelectProps} from '../components/Select';

export default {
  component: Select,
  title: 'Select',
  argTypes: {
    onChange: { action: 'onClick executed!' },
  },
} as Meta;

const data = [
  { id: 0, text: 'Seleccione', disabled: true, hidden: true },
  { id: 1, text: 'Declinada', disabled: false },
  { id: 2, text: 'Error', disabled: false },
  { id: 3, text: 'Aprobado', disabled: false },
  { id: 4, text: 'Anulada', disabled: false },
];

const Template: Story<SelectProps> = (args) => {
  return <Select {...args} />;
};

export const select = Template.bind({});

select.args = {
  label: {
    text:'Estado',
    className:'block text-sm font-medium text-gray-700',
  },
  data,
  metadata: {
    name:'select',
    id:'select',
    disabled: false,
    className:'mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md',
  },
  
};

export const selectWithoutLabel = Template.bind({});

selectWithoutLabel.args = {
  label: {
    text: '',
    className: '',
  },
  data,
  metadata: {
    name: 'select',
    id: 'select',
    disabled: false,
    className:
      'mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md',
  },
 
};
