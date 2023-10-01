import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/userSlice";
import buyersReducer from "./buyers/buyersSlice";

const reducers = combineReducers({
  user: userReducer,
  buyers: buyersReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "buyers"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
