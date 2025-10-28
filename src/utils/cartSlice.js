import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    mergedCartItems: [],
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const filteredRes = state.items.find((ele) => ele.id === item.id);

      if (filteredRes) {
        filteredRes.qty += 1;
      } else {
        state.items.push({ ...action.payload, qty: 1 });
      }
      sessionStorage.setItem("cart", JSON.stringify(state.items));
    },
    clearCart: (state) => {
      state.items.length = 0;
      sessionStorage.setItem("cart", JSON.stringify(state.items));
    },
    removeItem: (state) => {
      state.items.pop();
    },

    updateQty: (state, action) => {
      const { id, qty } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.qty = qty;
      }

      console.log(state.items);
      sessionStorage.setItem("cart", JSON.stringify(state.items));
    },
    mergeCartItems: (state, action) => {
      const { uid } = action.payload;
      console.log("uid", uid);
      const locartItems = JSON.parse(sessionStorage.getItem("cart"));

      const obj = { uid, items: locartItems };

      console.log("obj", obj);

      state.mergedCartItems.push(obj);
    },
  },
});

export const { addItem, clearCart, removeItem, updateQty, mergeCartItems } =
  cartSlice.actions;
export default cartSlice.reducer;
