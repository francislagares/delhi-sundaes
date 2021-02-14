import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Row } from 'react-bootstrap';
import { IScoops } from '../../interfaces/scoops/';
import { IToppings } from '../../interfaces/toppings';
import { SundaeOpts } from '../../types/SundaeOpts';
import AlertBanner from '../common/AlertBanner';
import ScoopOption from './ScoopOption';
import ToppingOption from './ToppingOption';

export const Options = ({
  optionType,
}: {
  optionType: SundaeOpts;
}): JSX.Element => {
  const [items, setItems] = useState<IScoops[] | IToppings[]>([]);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then(response => setItems(response.data))
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .catch(error => {
        setError(true);
      });
  }, [optionType]);

  if (error) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <AlertBanner />;
  }
  const ItemComponent = optionType === 'scoops' ? ScoopOption : ToppingOption;

  const optionItems = items.map(item => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));

  return <Row>{optionItems}</Row>;
};

export default Options;
