import { createReducer } from "@reduxjs/toolkit";
import {
  changeFilter,
  // fetchContactRequest,
  // fetchContactSuccess,
  // fetchContactError,
  // addContactRequest,
  // addContactSuccess,
  // addContactError,
  // deleteContactSuccess,
  // deleteContactRequest,
  // deleteContactError,
} from "./phonebook-actions";
import {
  fetchContact,
  addContact,
  deleteContact,
} from "./phonebook-operations";

export const contactsList = createReducer([], {
  [fetchContact.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

export const loading = createReducer(false, {
  [fetchContact.pending]: () => true,
  [fetchContact.fulfilled]: () => false,
  [fetchContact.rejected]: () => false,
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
});

export const contactsFilter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});
