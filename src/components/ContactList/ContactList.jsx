import Contact from "../Contact/Contact";

// import { IoPerson } from "react-icons/io5";
// import { FaPhoneAlt } from "react-icons/fa";

import css from "./ContactList.module.css";

// const iconPerson = <IoPerson key={1} />;
// const iconPhone = <FaPhoneAlt key={2} />;

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className={css.contactList}>
      {contacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          id={id}
          name={name}
          number={number}
          // iconPerson={iconPerson}
          // iconPhone={iconPhone}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
