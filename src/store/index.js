import { configureStore } from '@reduxjs/toolkit'
import authReducer from "../slices/auth"
import messageReducer from "../slices/message";
import courseReducer from "../slices/courses";
const reducer = {
  auth: authReducer,
  message: messageReducer,
  course: courseReducer
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
})

export default store;
