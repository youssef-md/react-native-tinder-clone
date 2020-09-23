import React from 'react';
import { Animated } from 'react-native';
import { Container, Text } from './styles';

export default function Choise({ type, style }) {
  return (
    <Container as={Animated.View} type={type} style={style}>
      <Text type={type}>{type}</Text>
    </Container>
  );
}
