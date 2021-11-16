import React, { useEffect } from "react";
import ContactItem from "../ContactItem";
import styles from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getContacts, getFilter } from "../../redux/Phonebook/selectors";
import contactsOperations from "../../redux/Phonebook/phonebook-operations";

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  useEffect(() => {
    dispatch(contactsOperations.fetchContact());
  }, []);

  return (
    <ul className={styles.contacts__list}>
      {getFilteredContacts().map(({ name, phone, id }) => (
        <ContactItem key={id} name={name} number={phone} id={id} />
      ))}
    </ul>
  );
}
