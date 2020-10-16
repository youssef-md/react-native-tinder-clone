import { StatusBar } from 'react-native';
import React from 'react';

import Main from './src/Main';

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fafafa" />
      <Main />
    </>
  );
}
