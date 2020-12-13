import React from 'react';
import { Text, View } from 'react-native';
import { COLORS } from '../utils/constants';

import { styles } from './styles';

export default function Choice({ type }) {
  const color = COLORS[type];

  return (
    <View style={[styles.container, { borderColor: color }]}>
      <Text style={[styles.text, { color }]}>{type}</Text>
    </View>
  );
}
