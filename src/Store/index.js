import { configureStore } from "@reduxjs/toolkit";

import receipt from "../Reducers/receiptReducer";
import basket from "../Reducers/basketReducer";

const store = configureStore({
  reducer: {
    receipt,
    basket,
  },
});

export default store;
