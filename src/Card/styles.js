import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

import { width, height } from '../../utils/deviceInfo';

export const CARD_WIDTH = width * 0.9;
export const CARD_HEIGHT = height * 0.78;
export const VERTICAL_MARGIN = height * 0.022;
export const CARD_BORDER_RADIUS = 20;

export const Container = styled.View`
  position: absolute;
  top: ${VERTICAL_MARGIN}px;
  width: ${CARD_WIDTH}px;
  height: ${CARD_HEIGHT}px;
  border-radius: ${CARD_BORDER_RADIUS}px;
  z-index: 10;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: ${CARD_BORDER_RADIUS}px;
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
  border-radius: ${CARD_BORDER_RADIUS}px;
`;
