import React, {useState} from 'react';
import Entrypoint from './Source/Navigation/Entrypoint';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <Entrypoint />
    </SafeAreaProvider>
  );
};

export default App;
