import { useId } from "react";
import css from "./SeachBox.module.css";

export default function SearchBox({ searchText, onFilter }) {
  const id = useId();
  return (
    <div className={css.searchBox}>
      <label htmlFor={`${id}-find`}>Find contacts by name</label>
      <input
        className={css.seachInput}
        id={`${id}-find`}
        type="text"
        value={searchText}
        onChange={onFilter}
      />
    </div>
  );
}
