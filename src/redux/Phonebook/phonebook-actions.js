import { createAction } from "@reduxjs/toolkit";

export const addContactRequest = createAction("contacts/addContactsRequest");
export const addContactSuccess = createAction("contacts/addContactsSuccess");
export const addContactError = createAction("contacts/addContactsError");

export const deleteContactRequest = createAction("contacts/addContactsRequest");
export const deleteContactSuccess = createAction("contacts/addContactsSuccess");
export const deleteContactError = createAction("contacts/addContactsError");

// export const deleteContact = createAction("contacts/Delete");
export const changeFilter = createAction("contacts/ChangeFilter");
