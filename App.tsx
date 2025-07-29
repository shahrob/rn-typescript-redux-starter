/**
 * React Native Structured App
 * Main App component with Redux Provider and Navigation
 */

import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { store } from './src/state/store';
import { AppNavigator } from './src/navigation/AppNavigator';
import './src/i18n';

const App = (): React.JSX.Element => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
