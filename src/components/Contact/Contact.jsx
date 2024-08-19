import { IconContext } from "react-icons";

export default function Contact({ name, number, icon }) {
  return (
    <li>
      <IconContext.Provider
        value={{ color: "black", className: "global-class-name" }}
      >
        {icon}
        <IoPerson />
      </IconContext.Provider>
      <p>{name}</p>

      <IconContext.Provider
        value={{ color: "black", className: "global-class-name" }}
      >
        {icon}
        <FaPhoneAlt />
      </IconContext.Provider>
      <p>{number} </p>
    </li>
  );
}
