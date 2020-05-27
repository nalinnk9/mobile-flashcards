import { createStore, combineReducers } from 'redux';
import DeckReducer from '../redux/reducers/DeckReducer';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
  key: "root",    
  storage: AsyncStorage
};
const CreateStore = () => {
    const persistedReducer = persistReducer(persistConfig, combineReducers({DeckReducer}));

  const store = createStore(persistedReducer);

  const persistor = persistStore(store);
  return {store, persistor};
};

export default CreateStore;