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
    const savedContacts = window.localStorage.getItem("my-contacts");
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }

    return starterContacts;
  });

  const addNewUser = newUsers => {
    setContacts(prevContacts => [...prevContacts, newUsers]);
  };

  const deleteUser = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const [searchText, setSearchText] = useState("");
  const handleTextChange = event => {
    setSearchText(event.target.value);
  };

  const findNewUser = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchText.toLowerCase())
  );

  useEffect(() => {
    window.localStorage.setItem("my-contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addNewUser} />
      <SearchBox onFilter={handleTextChange} searchText={searchText} />

      <ContactList contacts={findNewUser} onDelete={deleteUser} />
    </div>
  );
}
