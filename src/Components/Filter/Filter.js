import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/Phonebook/phonebook-actions";
import styles from "./Filter.module.css";
// import { connect } from "react-redux";

export default function Filter() {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("");

  const onFilterChange = (e) => {
    setFilter(e.target.value);
    dispatch(changeFilter(e.target.value));
  };

  const { box, input } = styles;
  return (
    <div className={box}>
      Find contacts by name:
      <input
        className={input}
        type="text"
        name="filter"
        value={filter}
        onChange={onFilterChange}
      />
    </div>
  );
}

// const mapStateToProps = (state) => ({
//   filter: state.phonebookContacts.contactsFilter,
// });

// const mapDispatchToProps = (dispatch) => ({
//   onChange1: (e) => dispatch(changeFilter(e)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);
