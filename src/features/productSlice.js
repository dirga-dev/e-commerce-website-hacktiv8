// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const initialState = {
//   items : [],
//   status : null,
//   error: null
// }

// export const productsFetch = createAsyncThunk(
//   "products/productsFetch",
//   async(id = null, {rejectWithValue}) => {
//     try{
//       const response = await axios.get("https://fakestoreapi.com/products")
//       return response?.data
//     }catch (error) {
//       return rejectWithValue("an error occured");
//     }
    
//   }
// )
// const productSlice = createSlice({
//   name : "products",
//   initialState,
//   reducers : {},
//   extraReducers: {
//     [productsFetch.pending]: (state, action) => {
//       state.status = "pending";
//     },
//     [productsFetch.fulfilled]: (state, action) => {
//       state.status = "success";
//       state.items = action.payload;
//     },
//     [productsFetch.rejected]: (state, action) => {
//       state.status = "rejected";
//       state.error = action.payload;
//     }
//   }
// });

// export default productSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    const formatRes = await res.data;
    await formatRes.forEach((product) => {
      product.quantity = 20;
    });
    // console.log(formatRes);
    return formatRes;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    isLoading: false,
  },
  reducers: {
    sisaStok: (state, action) => {
      state.data.map((product) =>
        product.id === action.payload.id
          ? product.quantity > 0
            ? (product.quantity -= action.payload.quantity)
            : product.quantity
          : product.quantity
      );
    },
    tambahStok: (state, action) => {
      state.data.map((product) =>
        product.id === action.payload.id
          ? (product.quantity += 1)
          : product.quantity
      );
    },
    kurangiStok: (state, action) => {
      state.data.map((product) =>
        product.id === action.payload.id
          ? product.quantity > 0
            ? (product.quantity -= 1)
            : product.quantity
          : product.quantity
      );
    },
  },
  extraReducers: {
    [productsFetch.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    },
    [productsFetch.pending]: (state) => {
      state.isLoading = true;
    },
  },
});

export const {
  sisaStok,
  tambahStok,
  kurangiStok,
} = productsSlice.actions;

export default productsSlice.reducer;