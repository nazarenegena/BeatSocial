import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import songsReducer from "../redux/features/songsSlice";
import favoritesReducer from "../redux/features/favoritesSlice";
import storage from "../utils/storage";

const persistConfig = {
  key: "favorites",
  storage,
};

const persistedReducer = persistReducer(persistConfig, favoritesReducer);

export const store = configureStore({
  reducer: {
    songs: songsReducer,
    favorites: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;
