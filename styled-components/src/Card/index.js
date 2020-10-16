import React from 'react';
import { Animated } from 'react-native';

import { ACTION_OFFSET } from '../../utils/constants';

import { Container, Image, Name, Gradient, Like, Nope } from './styles';

export default function Card({
  name,
  source,
  isFirst,
  swipe,
  tiltSign,
  ...rest
}) {
  const rotate = Animated.multiply(swipe.x, tiltSign).interpolate({
    inputRange: [-ACTION_OFFSET, 0, ACTION_OFFSET],
    outputRange: ['8deg', '0deg', '-8deg'],
  });

  const likeOpacity = swipe.x.interpolate({
    inputRange: [10, ACTION_OFFSET],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  const nopeOpacity = swipe.x.interpolate({
    inputRange: [-ACTION_OFFSET, -10],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const animatedCardStyle = {
    transform: [...swipe.getTranslateTransform(), { rotate: rotate }],
  };

  return (
    <Container
      as={Animated.View}
      style={isFirst && animatedCardStyle}
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
