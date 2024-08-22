import { useId } from "react";

import css from "./ContactForm.module.css";

export default function ContactForm({ onAdd }) {
  const id = useId();

  const handleSubmit = event => {
    event.preventDefault();

    onAdd({
      name: event.target.elements.name.value,
      number: event.target.elements.number.value,
    });

    event.target.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <div>
        <label htmlFor={`${id}-name`}>Name</label>
        <input type="text" name="name" id={`${id}-name`} />
      </div>

      <div>
        <label htmlFor={`${id}-number`}>Number</label>
        <input type="text" name="number" id={`${id}-number`} />
      </div>
      <button type="submit">Add contact</button>
    </form>
  );
}
