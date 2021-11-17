import axios from "axios";

axios.defaults.baseURL = "https://61923b18aeab5c0017105e79.mockapi.io";

export async function fetchContactsAsync() {
  const { data } = await axios.get("/contacts");
  return data;
}

export async function addContactAsync(o) {
  const { data } = await axios.post("/contacts", o);
  return data;
}
export async function deleteContactsAsync(id) {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
}
