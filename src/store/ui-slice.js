import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showCart: false,
  notification: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggle(state) {
      state.showCart = !state.showCart;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
    clearNotification(state) {
      state.notification = null;
    },
  },
});

export const clearNotification = () => {
  return (dispatch) => {
    const timeout = setTimeout(() => {
      dispatch(uiSlice.actions.clearNotification());
    }, 3000);
    return timeout;
  };
};

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
