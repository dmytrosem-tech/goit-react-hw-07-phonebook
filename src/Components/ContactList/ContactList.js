import React from "react";
import ContactItem from "../ContactItem";
import styles from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { getContacts, getFilter } from "../../redux/Phonebook/selectors";

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <ul className={styles.contacts__list}>
      {getFilteredContacts().map(({ name, number, id }) => (
        <ContactItem key={id} name={name} number={number} id={id} />
      ))}
    </ul>
  );
}
