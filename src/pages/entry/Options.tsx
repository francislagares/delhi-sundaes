import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Row } from 'react-bootstrap';
import { IScoops } from '../../interfaces/scoops/';
import { SundaeOpts } from '../../types/SundaeOpts';
import ScoopOption from './ScoopOption';

export const Options = ({
  optionType,
}: {
  optionType: SundaeOpts;
}): JSX.Element => {
  const [items, setItems] = useState<IScoops[]>([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then(response => setItems(response.data))
      .catch(error => {
        // TODO: handle error response
      });
  }, [optionType]);

  // TODO: replace `null` with ToppingOption when available
  const ItemComponent = optionType === 'scoops' ? ScoopOption : null;

  const optionItems = items.map(item => (
    <ItemComponent key={item.name} name={item.name} image={item.imagePath} />
  ));

  return <Row>{optionItems}</Row>;
};

export default Options;
