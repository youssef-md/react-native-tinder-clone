import React, { useCallback, useRef, useState } from 'react';
import { Animated, PanResponder } from 'react-native';
import { height, width } from '../../utils/deviceInfo';

import Card from '../Card';
import Footer from '../Footer';
import { pets as petsObj } from './data';
import { Container } from './styles';

const ACTION_OFFSET = 90;
const CARD_OUT_WIDTH = width + width * 0.9;
const CARD_OUT_HEIGHT = -1 * (height + height * 0.8);

export default function Main() {
  const swipe = useRef(new Animated.ValueXY()).current;
  const [pets, setPets] = useState(petsObj);

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
            y: dy,
          },
          useNativeDriver: true,
        }).start(transitionNext);
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

  const transitionNext = useCallback(() => {
    setPets((prevState) => prevState.slice(1));
    swipe.setValue({ x: 0, y: 0 });
  }, [swipe]);

  const animatedCardStyle = {
    transform: [...swipe.getTranslateTransform()],
  };
  console.log({
    slicedReverse: pets.slice(0, pets.length).reverse(),
    original: pets,
  });
  return (
    <Container>
      {pets
        .map(({ name, source }, index) => {
          const isFirst = index === 0;
          const panHandlers = isFirst ? panResponder.panHandlers : {};
          const cardStyle = isFirst ? animatedCardStyle : undefined;

          return (
            <Card
              key={name}
              name={name}
              source={source}
              style={cardStyle}
              {...panHandlers}
            />
          );
        })
        .reverse()}
      <Footer />
    </Container>
  );
}
