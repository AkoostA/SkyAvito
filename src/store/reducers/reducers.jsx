/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  token: {},
  search: "",
  product: {},
  products: [],
};

const reducers = createSlice({
  name: "reducers",
  initialState,
  reducers: {
    userUpdate: (state, actions) => {
      state.user = actions.payload;
    },
    tokenUpdate: (state, actions) => {
      state.token = actions.payload;
    },
    searchUpdate: (state, actions) => {
      state.search = actions.payload;
    },
    productUpdate: (state, actions) => {
      state.product = actions.payload;
    },
    productsUpdate: (state, actions) => {
      state.products = actions.payload;
    },
  },
});

export const {
  userUpdate,
  tokenUpdate,
  searchUpdate,
  productUpdate,
  productsUpdate,
} = reducers.actions;
export default reducers;
