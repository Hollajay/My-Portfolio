import { configureStore } from "@reduxjs/toolkit";
import { formApi } from "./api";
import { setupListeners } from "@reduxjs/toolkit/query";



export const store = configureStore({
  reducer: {
   [formApi.reducerPath]: formApi.reducer
  },
  middleware: (getDefaultMiddleware) => {
  return getDefaultMiddleware().concat(formApi.middleware)
  }
})

setupListeners(store.dispatch)