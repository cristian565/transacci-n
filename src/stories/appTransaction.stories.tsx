import { Story, Meta } from '@storybook/react';
import { AppTransaction} from '../AppTransaction';

export default {
  component: AppTransaction,
  title: 'AppTransaction',
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

const Template: Story = (args) => {
  return <AppTransaction {...args} />;
};

export const appTransaction = Template.bind({});

appTransaction.args = {
  
  
};


