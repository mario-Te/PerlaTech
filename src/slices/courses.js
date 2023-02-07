import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const baseUrl='https://script.googleusercontent.com/macros/echo?user_content_key=t5sFMGr9QscHObPIfBC44Af38KcftTNol89tNatMguAXMxfToOxReA9BiOQGbPvJaX6eaBDnvyKjcoCt-V_iqv9xsZmVIVxpm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnE3WQ29ezyAU1HgDA3ulK1MqYMDowRXwSQKNqos3Zb-BKMe5V96ZbeKbcBDkmVxBXLt2a6igwhmsrFHa2LPqz68s0CzZEhQxH9z9Jw9Md8uu&lib=MBMANYEAylSouC08AYq12MhHdGzn3zJ7g'
const initialState = {
    courses: [],
    status: 'idle',
    error: null
  };

export const fetchCourses = createAsyncThunk(
    'courses/getCourse',
    async (thunkAPI) => {
      const res = await fetch(baseUrl).then(
      (data) => data.json()
    )
    return res.data}
    )
const courseSlice = createSlice({
    name: 'courses',
    initialState,
    reducers: {
      // omit existing reducers here
    },
    extraReducers(builder) {
      builder
        .addCase(fetchCourses.pending, (state, action) => {
          state.status = 'loading'
        })
        .addCase(fetchCourses.fulfilled, (state,  action) => {
          state.status = 'succeeded'
          // Add any fetched posts to the array
          state.courses = action.payload
        })
        .addCase(fetchCourses.rejected, (state, action) => {
          state.status = 'failed'
          state.error = action.error.message
        })
    }
  })

export default courseSlice.reducer;