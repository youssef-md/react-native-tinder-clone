import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Animated, PanResponder, View } from 'react-native';

import { styles } from './styles';
import { pets as petsObj } from './data';
import { ACTION_OFFSET, CARD } from '../../utils/constants';

import Card from '../Card';
import Footer from '../Footer';

export default function Main() {
  const [pets, setPets] = useState(petsObj);

  const swipe = useRef(new Animated.ValueXY()).current;
  const tiltSign = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (pets.length === 0) {
      setPets(petsObj);
    }
  }, [pets]);

  const panResponder = PanResponder.create({
    // Por que criar PanResponder aqui ao invés de dentro do Card?
    // -> Porque aqui ele só será criado 1 vez para N Cards que existirem

    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, { dx, dy, y0 }) => {
      swipe.setValue({ x: dx, y: dy });
      tiltSign.setValue(y0 > CARD.HEIGHT / 2 ? 1 : -1);
    },
    onPanResponderRelease: (_, { dx, dy }) => {
      const direction = Math.sign(dx);
      const userAction = Math.abs(dx) > ACTION_OFFSET;

      if (userAction) {
        Animated.timing(swipe, {
          duration: 200,
          toValue: {
            x: direction * CARD.OUT_OF_VIEW,
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
  }, []);

  const handleChoise = useCallback((direction) => {
    Animated.timing(swipe.x, {
      toValue: direction * CARD.OUT_OF_VIEW,
      duration: 400,
      useNativeDriver: true,
    }).start(transitionNext);
  }, []);

  return (
    <View style={styles.container}>
      {pets
        .map(({ name, source }, index) => {
          const isFirst = index === 0;
          const panHandlers = isFirst ? panResponder.panHandlers : {};

          return (
            <Card
              key={name}
              name={name}
              source={source}
              swipe={swipe}
              isFirst={isFirst}
              tiltSign={tiltSign}
              {...panHandlers}
            />
          );
        })
        .reverse()}

      <Footer handleChoise={handleChoise} />
    </View>
  );
}
