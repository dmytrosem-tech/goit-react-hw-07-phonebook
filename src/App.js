// import { useState, useEffect } from "react";
import ContactForm from "./Components/ContactForm";
import Filter from "./Components/Filter";
import ContactList from "./Components/ContactList";

export default function App() {
  // useEffect(() => {
  //   window.localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

// const [contacts, setContacts] = useState(
//   () => JSON.parse(window.localStorage.getItem("contacts")) ?? []
// );
