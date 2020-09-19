import React from 'react';

import Card from '../Card';
import { pets } from './data';
import { Container } from './styles';

export default function Main() {
  return (
    <Container>
      {pets.map(({ name, source }) => {
        return <Card key={name} name={name} source={source} />;
      })}
    </Container>
  );
}
