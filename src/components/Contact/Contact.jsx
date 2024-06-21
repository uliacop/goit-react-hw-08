import css from "./Contact.module.css";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

export default function Contact({ contact }) {
  const dispatch = useDispatch();
  const contactId = contact.id;
  const deletePhoneNumber = () => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div className={css.container}>
      <div>
        <div className={css.user}>
          <div className={css.userIcon}>
            <FaUser />
          </div>
          <p className={css.userName}>{contact.name}</p>
        </div>
        <div className={css.user}>
          <div className={css.phone}>
            <FaPhoneAlt />
          </div>
          <p className={css.phone}>{contact.number}</p>
        </div>
      </div>

      <button className={css.button} onClick={deletePhoneNumber}>
        Delete
      </button>
    </div>
  );
}
