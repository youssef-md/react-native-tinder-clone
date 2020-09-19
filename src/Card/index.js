import React from 'react';
import { Container, Image, Name } from './styles';

export default function Card({ name, source }) {
  return (
    <Container>
      <Image source={source} />
      <Name>{name}</Name>
    </Container>
  );
}
