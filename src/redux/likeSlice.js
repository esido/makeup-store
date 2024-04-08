import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  likes: JSON.parse(localStorage.getItem("likedProducts")) || [],
};

const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {
    likedProduct: (state, action) => {
      const existingProductIndex = state.likes.findIndex(
        (product) => product.id === action.payload.id
      );

      if (existingProductIndex === -1) {
        state.likes.push(action.payload);
      } else {
        state.likes.splice(existingProductIndex, 1);
      }
      localStorage.setItem("likedProducts", JSON.stringify(state.likes));
    },
  },
});

export const { likedProduct } = likeSlice.actions;
export { likeSlice };
