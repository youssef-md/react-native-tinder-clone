import styled, { css } from 'styled-components/native';

const choices = {
  like: {
    container: css`
      border-color: #00ffa6;
    `,
    text: css`
      color: #00ffa6;
    `,
  },
  nope: {
    container: css`
      border-color: #ff006f;
    `,
    text: css`
      color: #ff006f;
    `,
  },
};

export const Container = styled.View`
  position: absolute;
  border-width: 6px;
  width: 150px;
  padding: 5px 0;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.2);
  ${(props) => choices[props.type].container}
`;

export const Text = styled.Text`
  font-size: 42px;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 3px;
  ${(props) => choices[props.type].text}
`;
