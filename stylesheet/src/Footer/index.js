import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import RoundButton from '../RoundButton';
import { COLORS } from '../../utils/constants';

export default function Footer({ handleChoise }) {
  return (
    <View style={styles.container}>
      <RoundButton
        onPress={() => handleChoise(-1)}
        name="times"
        size={40}
        color={COLORS.nope}
      />
      <RoundButton
        onPress={() => handleChoise(1)}
        name="heart"
        size={34}
        color={COLORS.like}
      />
    </View>
  );
}
