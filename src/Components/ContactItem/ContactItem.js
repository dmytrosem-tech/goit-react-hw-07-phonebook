import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/Phonebook/phonebook-actions";
import PropTypes from "prop-types";
import styles from "./ContactItem.module.css";
// import { connect } from "react-redux";

export default function ContactItem({ name, number, id }) {
  const dispatch = useDispatch();
  const { contacts__item, contact__name, contact__number, contacts__btn } =
    styles;
  return (
    <li id={id} className={contacts__item}>
      <p className={contact__name}>{name}</p>
      <p className={contact__number}>tel: {number}</p>
      <button
        onClick={() => dispatch(deleteContact(id))}
        className={contacts__btn}
      >
        Delete contact
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
};

// const mapDispatchToProps = (dispatch) => ({
//   deleteContact: (id) => dispatch(deleteContact(id)),
// });

// export default connect(null, mapDispatchToProps)(ContactItem);
