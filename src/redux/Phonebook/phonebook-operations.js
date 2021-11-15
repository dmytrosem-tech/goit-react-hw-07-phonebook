import axios from "axios";
import actions from "./phonebook-actions";

axios.defaults.baseURL = "http://localhost:4040";

export const addContact = (o) => (dispatch) => {
  dispatch(actions.addContactRequest);
  axios
    .post("/contacts", o)
    .then(({ data }) =>
      dispatch({ type: "contacts/adContactSuccess", payload: data })
    )
    .catch((e) => dispatch({ type: "contacts/addContactError", payload: e }));
};
