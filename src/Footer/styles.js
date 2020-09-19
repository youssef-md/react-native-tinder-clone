import styled from 'styled-components/native';
import { FontAwesome } from '@expo/vector-icons';

export const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  margin: 10px 0;
`;

export const RoundButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  background: white;
  justify-content: center;
  align-items: center;
  width: 65px;
  height: 65px;
  border-radius: 200px;
  margin: 0 10px;
  elevation: 5;
`;

export const IconX = styled(FontAwesome).attrs({
  name: 'times',
  size: 40,
})`
  color: #ff006f;
`;

export const IconHeart = styled(FontAwesome).attrs({
  name: 'heart',
  size: 34,
})`
  margin-top: 3px;
  color: #00ffa6;
`;
