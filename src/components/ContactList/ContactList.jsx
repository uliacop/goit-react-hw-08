import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/selectors";

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);
  return (
    <ul className={css.list}>
      {filteredContacts.length === 0 ? (
        <p>You do not have any contact!</p>
      ) : (
        filteredContacts.map((contact) => {
          return <Contact key={contact.id} contact={contact} />;
        })
      )}
    </ul>
  );
}
