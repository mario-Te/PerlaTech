import { configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import authReducer from "../slices/auth"
import messageReducer from "../slices/message";
import courseReducer from "../slices/courses";
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}
const authenticationReducer = persistReducer(persistConfig, authReducer)
const reducer = {
  auth: authenticationReducer,
  message: messageReducer,
  course: courseReducer
}


const store = configureStore({
  reducer: reducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export default store;
