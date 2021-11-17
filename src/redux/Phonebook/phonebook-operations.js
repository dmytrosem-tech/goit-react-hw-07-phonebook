import { createAsyncThunk } from "@reduxjs/toolkit";
import * as phoneBookAPI from "../../services/phonebook-api";
// import {
//   fetchContactRequest,
//   fetchContactSuccess,
//   fetchContactError,
//   addContactRequest,
//   addContactSuccess,
//   addContactError,
//   deleteContactRequest,
//   deleteContactSuccess,
//   deleteContactError,
// } from "./phonebook-actions";

//---------------------------------------------asyncThunk----------------------------------------------//
export const fetchContact = createAsyncThunk(
  "contacts/fetchContactsGlobal",
  async () => {
    const contacts = await phoneBookAPI.fetchContactsAsync();
    return contacts;
  }
);

export const addContact = createAsyncThunk(
  "contacts/сontactsGlobal",
  async (o) => {
    const contacts = await phoneBookAPI.addContactAsync(o);
    return contacts;
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContactGlobal",
  async (id) => {
    await phoneBookAPI.deleteContactsAsync(id);
    return id;
  }
);

//------------------------------------------------ASYNC-------------------------------------------//
// const fetchContact = () => async (dispatch) => {
//   dispatch(fetchContactRequest());
//   try {
//     const contacts = await phoneBookAPI.fetchContactsAsync();
//     dispatch(fetchContactSuccess(contacts));
//   } catch (error) {
//     dispatch(fetchContactError(error));
//   }
// };
// const addContact = (o) => async (dispatch) => {
//   dispatch(addContactRequest());
//   try {
//     const contacts = await phoneBookAPI.addContactAsync(o);
//     dispatch(addContactSuccess(contacts));
//   } catch (error) {
//     dispatch(addContactError(error));
//   }
// };
// const deleteContact = (id) => async (dispatch) => {
//   dispatch(deleteContactRequest());
//   try {
//     await phoneBookAPI.deleteContactsAsync(id);
//     dispatch(deleteContactSuccess(id));
//   } catch (error) {
//     dispatch(deleteContactError(error));
//   }
// };

// ------------------------------------------ AXIOS-----------------------------------------//
// const fetchContact = () => (dispatch) => {
//   dispatch(fetchContactRequest());
//   axios
//     .get("/contacts")
//     .then(({ data }) => dispatch(fetchContactSuccess(data)))
//     .catch((e) => dispatch(fetchContactError(e)));
// };

// const addContact = (o) => (dispatch) => {
//   dispatch(addContactRequest());
//   axios
//     .post("/contacts", o)
//     .then(({ data }) => dispatch(addContactSuccess(data)))
//     .catch((e) => dispatch(addContactError(e)));
// };

// const deleteContact = (contactId) => (dispatch) => {
//   dispatch(deleteContactRequest());
//   axios
//     .delete(`/contacts/${contactId}`)
//     .then(() => dispatch(deleteContactSuccess(contactId)))
//     .catch((e) => dispatch(deleteContactError(e)));
// };

// export default {
//   addContact,
//   deleteContact,
//   fetchContact,
// };
