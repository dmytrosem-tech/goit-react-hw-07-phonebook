import { createReducer } from "@reduxjs/toolkit";
import {
  changeFilter,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactSuccess,
  deleteContactRequest,
  deleteContactError,
} from "./phonebook-actions";

export const contactsList = createReducer([], {
  [addContactSuccess]: (state, { payload }) => {
    console.log(payload);
    if (state.some(({ name }) => name === payload.name)) {
      alert(`Sorry, contact is already in contacts list`);
      return state;
    }
    return [...state, payload];
  },
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

export const loading = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
});

export const contactsFilter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});
