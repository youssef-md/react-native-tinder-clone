import React, { useRef, useCallback } from 'react';
import { Animated, TouchableWithoutFeedback } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { styles } from './styles';

export default function RoundButton({ name, size, color, onPress }) {
  const scale = useRef(new Animated.Value(1)).current;

  const animateScale = useCallback((newScale) => {
    Animated.spring(scale, {
      toValue: newScale,
      friction: 4,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <TouchableWithoutFeedback
      onPressIn={() => animateScale(0.8)}
      delayPressIn={0}
      onPressOut={() => {
        animateScale(1);
        onPress();
      }}
      delayPressOut={100}
    >
      <Animated.View style={[styles.roundButton, { transform: [{ scale }] }]}>
        <FontAwesome name={name} size={size} color={color} />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}
