import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  contactsFilter,
  contactsList,
  loading,
} from "./Phonebook/phonebook-reducer";
import logger from "redux-logger";

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const phoneBookReducer = combineReducers({
  contacts: contactsList,
  filter: contactsFilter,
  loading,
});

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  // logger,
];

const store = configureStore({
  reducer: {
    phonebook: phoneBookReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

export default store;
// export const persistor = persistStore(store);
