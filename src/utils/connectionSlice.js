import { createSlice } from "@reduxjs/toolkit";

const connectionslice = createSlice({
  name: "connections",
  initialState: null,
  reducers: {
    addConnections: (state, action) => {
      return action.payload;
    },
    removeConnections: (state, action) => {
      return null;
    },
  },
});

export const { addConnections, removeConnections } = connectionslice.actions;

export default connectionslice.reducer;
