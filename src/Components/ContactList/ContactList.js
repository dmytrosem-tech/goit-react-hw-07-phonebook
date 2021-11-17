import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ContactItem from "../ContactItem";
import Loader from "../Loader/Loader";
import { fetchContact } from "../../redux/Phonebook/phonebook-operations";
import {
  getContacts,
  getFilter,
  getLoading,
} from "../../redux/Phonebook/selectors";
import styles from "./ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const isLoading = useSelector(getLoading);
  const dispatch = useDispatch();

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  useEffect(() => {
    dispatch(fetchContact());
  }, []);

  return (
    <ul className={styles.contacts__list}>
      {isLoading && <Loader />}
      {getFilteredContacts().map(({ name, phone, id }) => (
        <ContactItem key={id} name={name} number={phone} id={id} />
      ))}
    </ul>
  );
}
