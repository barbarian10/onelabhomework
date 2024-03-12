import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import usersSlice from '../features/users/actions';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, usersSlice);

const store = configureStore({
  reducer: {
    users: persistedReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };
