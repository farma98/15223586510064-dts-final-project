import { configureStore } from "@reduxjs/toolkit";
import { sportmonksApi } from "../services/sportmonksApi.js";

export const store = configureStore({
  reducer: {
    [sportmonksApi.reducerPath]: sportmonksApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(sportmonksApi.middleware);
  },
});