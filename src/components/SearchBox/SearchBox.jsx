import css from "./SeachBox.module.css";

export default function SearchBox({ value, onUpdate }) {
  const handleChange = event => {
    onUpdate(event.target.value);
  };

  return (
    <div className={css.searchBox}>
      <span>Find contacts by name</span>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
}
