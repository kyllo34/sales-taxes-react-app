import { configureStore } from "@reduxjs/toolkit";

import receipt from "../Reducers/receiptReducer";

const store = configureStore({
  reducer: {
    receipt,
  },
});

export default store;
