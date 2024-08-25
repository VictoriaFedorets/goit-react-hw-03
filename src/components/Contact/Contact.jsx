import { IconContext } from "react-icons";
import { IoPerson } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

import css from "./Contact.module.css";

export default function Contact({ name, number, id, onDelete }) {
  const handleDelete = () => {
    onDelete(id);
  };
  return (
    <li className={css.contactList}>
      <div>
        <p className={css.iconAndInfo}>
          <IconContext.Provider value={{ color: "black", size: "30" }}>
            <IoPerson />
          </IconContext.Provider>
          {name}
        </p>

        <p className={css.iconAndInfo}>
          <IconContext.Provider value={{ color: "black", size: "30" }}>
            <FaPhoneAlt />
          </IconContext.Provider>
          {number}
        </p>
      </div>

      <div>
        <button type="button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </li>
  );
}
