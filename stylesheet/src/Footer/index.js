import React from 'react';
import { View } from 'react-native';

import RoundButton from '../RoundButton';
import { COLORS } from '../utils/constants';
import { styles } from './styles';

export default function Footer({ handleChoice }) {
  return (
    <View style={styles.container}>
      <RoundButton
        name="times"
        size={40}
        color={COLORS.nope}
        onPress={() => handleChoice(-1)}
      />
      <RoundButton
        name="heart"
        size={34}
        color={COLORS.like}
        onPress={() => handleChoice(1)}
      />
    </View>
  );
}
