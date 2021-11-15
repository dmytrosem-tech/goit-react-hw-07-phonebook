import axios from "axios";
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from "./phonebook-actions";

axios.defaults.baseURL = "https://61923b18aeab5c0017105e79.mockapi.io";

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
