import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import NavigatorCustom from './components/NavigatorCustom';
import { Provider } from 'react-redux';
import CreateStore from './util/CreateStore';
import { PersistGate } from 'redux-persist/integration/react';


const {store, persistor} = CreateStore();
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <NavigatorCustom/>
      </PersistGate>
    </Provider>
  );
}
