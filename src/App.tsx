import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import '../i18n';
import {store, persistor} from 'stores/store';
import {theme} from 'shared/theme';
import TabNavigator from './TabNavigator';
import {LogBox} from 'react-native';

export default function App() {
  LogBox.ignoreAllLogs();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer theme={theme}>
          <TabNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
