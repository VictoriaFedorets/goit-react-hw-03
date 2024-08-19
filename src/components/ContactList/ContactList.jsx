import Contact from "../Contact/Contact";
import { IoPerson } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

const icons = [<IoPerson key={1} />, <FaPhoneAlt key={2} />];

export default function ContactList({ starterContacts }) {
  return (
    <ul>
      <li>
        {contacts.map(({ id, name, number }, idx) => (
          <Contact key={id} name={name} number={number} icon={icons[idx]} />
        ))}
      </li>
    </ul>
  );
}
