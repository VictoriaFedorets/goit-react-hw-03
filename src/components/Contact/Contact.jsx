import { IconContext } from "react-icons";
import { IoPerson } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

import css from "./Contact.module.css";

export default function Contact({ name, number, id, onDelete }) {
  //   const handleDelete = () => {
  //     onDelete(name.id);
  //   };
  return (
    <li className={css.contactList}>
      <div>
        <div className={css.iconAndInfo}>
          <IconContext.Provider value={{ color: "black", size: "30" }}>
            <IoPerson />
          </IconContext.Provider>
          <p>{name}</p>
        </div>

        <div className={css.iconAndInfo}>
          <IconContext.Provider value={{ color: "black", size: "30" }}>
            <FaPhoneAlt />
          </IconContext.Provider>
          <p>{number}</p>
        </div>
      </div>

      <div>
        <button onClick={() => onDelete(id)}>Delete</button>
      </div>
    </li>
  );
}
