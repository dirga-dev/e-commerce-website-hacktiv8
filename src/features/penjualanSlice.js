import { createSlice } from "@reduxjs/toolkit";

export const penjualanSlice = createSlice({
  name: "penjualan",
  initialState: {
    penjualan: [],
    isLoading: false,
  },
  reducers: {
    tambahPenjualan: (state, action) => {
      state.penjualan = [...state.penjualan, action.payload];
    },
    updatePenjualan: (state, action) => {
      state.penjualan.map((item) =>
        item.id === action.payload.id
          ? (item.quantity += action.payload.quantity)
          : item.quantity
      );
    },
  },
  extraReducers: {},
});

export const { tambahPenjualan, updatePenjualan } = penjualanSlice.actions;

export default penjualanSlice.reducer;