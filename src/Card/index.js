import React, { useRef } from 'react';
import { Animated } from 'react-native';

import { ACTION_OFFSET } from '../../utils/constants';

import { Container, Image, Name, Gradient, Like, Nope } from './styles';

export default function Card({ name, source, isFirst, swipe, ...rest }) {
  const rotate = useRef(
    swipe.x.interpolate({
      inputRange: [-100, 0, 100],
      outputRange: ['10deg', '0deg', '-10deg'],
      extrapolate: 'clamp',
    })
  ).current;

  const likeOpacity = useRef(
    swipe.x.interpolate({
      inputRange: [10, ACTION_OFFSET],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    })
  ).current;

  const nopeOpacity = useRef(
    swipe.x.interpolate({
      inputRange: [-ACTION_OFFSET, -10],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    })
  ).current;

  return (
    <Container
      as={Animated.View}
      style={
        isFirst && {
          transform: [...swipe.getTranslateTransform(), { rotate }],
        }
      }
      {...rest}
    >
      <Image source={source} />
      <Gradient />
      <Name>{name}</Name>
      {isFirst && (
        <>
          <Like type="like" style={{ opacity: likeOpacity }} />
          <Nope type="nope" style={{ opacity: nopeOpacity }} />
        </>
      )}
    </Container>
  );
}
