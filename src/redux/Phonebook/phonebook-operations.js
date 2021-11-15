import axios from "axios";
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from "./phonebook-actions";

axios.defaults.baseURL = "http://localhost:4040";

const addContact = (o) => (dispatch) => {
  dispatch(addContactRequest());
  axios
    .post("/contacts", o)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch((e) => dispatch(addContactError(e)));
};

const deleteContact = (contactId) => (dispatch) => {
  dispatch(deleteContactRequest());
  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deleteContactSuccess(contactId)))
    .catch((e) => dispatch(deleteContactError(e)));
};

export default {
  addContact,
  deleteContact,
};
