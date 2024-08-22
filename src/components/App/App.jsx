import { useState, useEffect } from "react";

import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";

export default function App() {
  const starterContacts = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];

  const [contacts, setContacts] = useState(() => {
    try {
      const savedContacts = window.localStorage.getItem("my-contacts");
      if (savedContacts) {
        return JSON.parse(savedContacts);
      }
    } catch (error) {
      console.error("Failed to parse contacts from localStorage:", error);
    }
    return starterContacts;
  });

  const addNewUser = newUser => {
    setContacts(prevContacts => [...prevContacts, newUser]);
  };

  const deleteUser = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  const [text, setText] = useState("");
  const handleTextChange = newText => {
    setText(newText);
  };

  const findNewUser = contacts.filter(contact =>
    contact.name.toLowerCase().includes(text.toLowerCase())
  );

  useEffect(() => {
    window.localStorage.setItem("my-contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addNewUser} />
      <SearchBox value={text} onUpdate={handleTextChange} />
      <p>{text}</p>
      <ContactList onDelete={deleteUser} contacts={findNewUser} />
    </div>
  );
}
