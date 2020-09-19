import React, { useRef } from 'react';
import { Animated, PanResponder } from 'react-native';
import { height, width } from '../../utils/deviceInfo';

import Card from '../Card';
import Footer from '../Footer';
import { pets } from './data';
import { Container } from './styles';

const ACTION_OFFSET = 90;
const CARD_OUT_WIDTH = width + width * 0.9;
const CARD_OUT_HEIGHT = -1 * (height + height * 0.8);

export default function Main() {
  const swipe = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (e, { dx, dy }) => {
      swipe.setValue({ x: dx, y: dy });
    },
    onPanResponderRelease: (e, { dx, dy }) => {
      const direction = Math.sign(dx);
      const userAction = Math.abs(dx) > ACTION_OFFSET;

      if (userAction) {
        Animated.timing(swipe, {
          duration: 200,
          toValue: {
            x: direction * CARD_OUT_WIDTH,
            y: CARD_OUT_HEIGHT,
          },
          useNativeDriver: true,
        }).start();
      } else {
        Animated.spring(swipe, {
          friction: 5,
          toValue: {
            x: 0,
            y: 0,
          },
          useNativeDriver: true,
        }).start();
      }
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
