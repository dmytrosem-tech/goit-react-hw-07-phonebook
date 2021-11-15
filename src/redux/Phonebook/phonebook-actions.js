import { createAction } from "@reduxjs/toolkit";

const addContactRequest = createAction("contacts/addContactsRequest");
const addContactSuccess = createAction("contacts/addContactsSuccess");
const addContactError = createAction("contacts/addContactsError");

// const addContact = createAction("contacts/Add");
// export const deleteContact = createAction("contacts/Delete");
// export const changeFilter = createAction("contacts/ChangeFilter");
