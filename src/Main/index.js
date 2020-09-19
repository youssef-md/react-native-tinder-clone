import React, { useRef } from 'react';
import { Animated, PanResponder } from 'react-native';

import Card from '../Card';
import Footer from '../Footer';
import { pets } from './data';
import { Container } from './styles';

export default function Main() {
  const swipe = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (e, { dx, dy }) => {
      swipe.setValue({ x: dx, y: dy });
    },
    onPanResponderRelease: () => {
      Animated.timing(swipe, {
        duration: 200,
        toValue: {
          x: 0,
          y: 0,
        },
        useNativeDriver: true,
      }).start();
    },
  });

  const animatedCardStyle = {
    transform: [...swipe.getTranslateTransform()],
  };

  return (
    <Container>
      {pets.map(({ name, source }) => {
        return (
          <Card
            key={name}
            name={name}
            source={source}
            style={animatedCardStyle}
            {...panResponder.panHandlers}
          />
        );
      })}

      <Footer />
    </Container>
  );
}
