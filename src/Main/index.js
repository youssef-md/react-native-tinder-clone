import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Animated, PanResponder, TouchableOpacity, Text } from 'react-native';
import { width } from '../../utils/deviceInfo';

import Card from '../Card';
import Footer from '../Footer';
import { pets as petsObj } from './data';
import { Container } from './styles';

const ACTION_OFFSET = 90;
const CARD_OUT_WIDTH = width + width * 0.9;

export default function Main() {
  const swipe = useRef(new Animated.ValueXY()).current;
  const [pets, setPets] = useState(petsObj);

  useEffect(() => {
    if (pets.length === 0) {
      setPets(petsObj);
    }
  }, [pets]);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (e, { dx, dy, y0 }) => {
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
    })
  ).current;

  const transitionNext = useCallback(() => {
    setPets((prevState) => prevState.slice(1));
    swipe.setValue({ x: 0, y: 0 });
  }, [swipe]);

  const handleCoise = useCallback(
    (sign) => {
      Animated.timing(swipe.x, {
        duration: 500,
        toValue: sign * CARD_OUT_WIDTH,
        useNativeDriver: true,
      }).start(transitionNext);
    },
    [swipe.x, transitionNext]
  );

  const rotate = swipe.x.interpolate({
    inputRange: [-100, 0, 100],
    outputRange: ['10deg', '0deg', '-10deg'],
    extrapolate: 'clamp',
  });

  const animatedCardStyle = {
    transform: [...swipe.getTranslateTransform(), { rotate: rotate && rotate }],
  };

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

      <Footer
        handleLike={() => handleCoise(1)}
        handleNo={() => handleCoise(-1)}
      />
    </Container>
  );
}
