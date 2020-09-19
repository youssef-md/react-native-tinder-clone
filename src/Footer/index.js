import React from 'react';

import { Container, RoundButton, IconX, IconHeart } from './styles';

export default function Footer() {
  return (
    <Container>
      <RoundButton>
        <IconX />
      </RoundButton>
      <RoundButton>
        <IconHeart />
      </RoundButton>
    </Container>
  );
}
