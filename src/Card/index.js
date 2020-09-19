import React from 'react';
import { Animated } from 'react-native';
import { Container, Image, Name, Gradient } from './styles';

export default function Card({ name, source, style, ...rest }) {
  return (
    <Container as={Animated.View} style={style} {...rest}>
      <Image source={source} />
      <Gradient />
      <Name>{name}</Name>
    </Container>
  );
}
