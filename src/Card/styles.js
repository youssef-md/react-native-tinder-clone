import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

import { width, height } from '../../utils/deviceInfo';

export const Container = styled.View`
  flex: 1;
  margin: 10px 10px 0 10px;
  overflow: hidden;
  border-radius: 15px;
  z-index: 2;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
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
  height: 100px;
`;
