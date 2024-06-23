import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";
import { Toaster } from "react-hot-toast";
import Modal from "../Modal/Modal";
import { useState } from "react";
import ModalChange from "../ModalChange/ModalChange";

const Contact = ({ contact }) => {
  const [showModal, setShowModal] = useState(false);
  const [showModalChange, setShowModalChange] = useState(false);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <li>
        <div className={css.wrapper_contact}>
          <h2>
            <FaUser size="16" /> {contact.name}
          </h2>
          <p>
            <FaPhone size="16" /> {contact.number}
          </p>
        </div>
        <div className={css.buttons}>
          <button
            type="button"
            className={css.delete_button}
            onClick={() => setShowModalChange(true)}
          >
            Change
          </button>
          <button
            type="button"
            className={css.delete_button}
            onClick={() => setShowModal(true)}
          >
            Delete
          </button>
        </div>
      </li>
      {showModal && <Modal contact={contact} setShowModal={setShowModal} />}
      {showModalChange && (
        <ModalChange
          contact={contact}
          setShowModalChange={setShowModalChange}
        />
      )}
    </>
  );
};

export default Contact;
