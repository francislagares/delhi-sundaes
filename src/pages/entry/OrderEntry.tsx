import Options from './Options';

export const OrderEntry = (): JSX.Element => {
  return (
    <div>
      <Options optionType='scoops' />
      <Options optionType='toppings' />
    </div>
  );
};

export default OrderEntry;
