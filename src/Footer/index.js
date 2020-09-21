import React from 'react';

import { Container, RoundButton, IconX, IconHeart } from './styles';

export default function Footer({ handleLike, handleNo }) {
  return (
    <Container>
      <RoundButton onPress={handleNo}>
        <IconX />
      </RoundButton>
      <RoundButton onPress={handleLike}>
        <IconHeart />
      </RoundButton>
    </Container>
  );
}
