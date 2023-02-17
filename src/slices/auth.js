import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";
import AuthService from "../services/auth.service";
let user ;


export const login = createAsyncThunk(
  "User/log_in",
  async ({phone, password}, thunkAPI) => {
    try {
     
      const data = await AuthService.login(phone, password);
      return { user: data };
    } catch (error) {
      
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);


const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers :{
     logout: (state) => {
    state.isLoggedIn = false;
    state.user = null;
    
  }
  },
  extraReducers: {
   
    [login.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
    },
    [login.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
   
  },
});
export const {logout}=authSlice.actions;
const { reducer } = authSlice;
export default reducer;
