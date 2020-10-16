import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

import { width, height, CARD, VERTICAL_MARGIN } from '../../utils/constants';
import Choise from '../Choise';

export const Container = styled.View`
  position: absolute;
  top: ${VERTICAL_MARGIN}px;
  z-index: 10;
`;

export const Image = styled.Image`
  width: ${CARD.CARD_WIDTH}px;
  height: ${CARD.CARD_HEIGHT}px;
  border-radius: ${CARD.CARD_BORDER_RADIUS}px;
`;

export const Name = styled.Text`
  position: absolute;
  font-size: 35px;
  font-weight: bold;
  color: white;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
  letter-spacing: 0.5px;
  bottom: 25px;
  left: 20px;
`;

export const Gradient = styled(LinearGradient).attrs({
  colors: ['transparent', 'rgba(0, 0, 0, 0.9)'],
})`
  position: absolute;
  width: 100%;
  bottom: 0;
  height: 150px;
  border-radius: ${CARD.CARD_BORDER_RADIUS}px;
`;

export const Like = styled(Choise)`
  top: ${height * 0.12}px;
  left: ${width * 0.1}px;
  transform: rotate(-30deg);
`;

export const Nope = styled(Choise)`
  top: ${height * 0.12}px;
  right: ${width * 0.1}px;
  transform: rotate(30deg);
`;
