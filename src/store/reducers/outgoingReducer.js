import { createSlice } from "@reduxjs/toolkit";
import { getOutgoings } from "../actions/outgoingAction";

const initialState = {
  list: [],
  loading: false,
  error: null,
};

const outgoingSlice = createSlice({
  name: "outgoings",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // GET OUTGOINGS
      .addCase(getOutgoings.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getOutgoings.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(getOutgoings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default outgoingSlice.reducer;
