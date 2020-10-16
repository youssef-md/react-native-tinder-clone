import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Animated, Image, Text, View } from 'react-native';
import { ACTION_OFFSET } from '../../utils/constants';
import Choice from '../Choice';

import { styles } from './styles';

export default function Card({
  name,
  source,
  swipe,
  isFirst,
  tiltSign,
  ...rest
}) {
  const rotate = Animated.multiply(tiltSign, swipe.x).interpolate({
    // Quando lidando com rotação, +: horário | -: anti-horário
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
    transform: [...swipe.getTranslateTransform(), { rotate }],
  };

  return (
    <Animated.View
      style={[styles.container, isFirst && animatedCardStyle]}
      {...rest}
    >
      <Image source={source} style={styles.image} />
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.9)']}
        style={styles.gradient}
      />
      <Text style={styles.name}>{name}</Text>

      {isFirst && (
        <>
          <Animated.View
            style={[
              styles.choiceContainer,
              styles.choiceLike,
              { opacity: nopeOpacity },
            ]}
          >
            <Choice type="nope" />
          </Animated.View>
          <Animated.View
            style={[
              styles.choiceContainer,
              styles.choiceNope,
              { opacity: likeOpacity },
            ]}
          >
            <Choice type="like" />
          </Animated.View>
        </>
      )}
    </Animated.View>
  );
}
