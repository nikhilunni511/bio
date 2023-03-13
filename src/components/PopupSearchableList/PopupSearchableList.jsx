import { useState } from "react";
import styles from "./PopupSearchableList.module.scss";

const PopupSearchableList = ({ options, onSelect }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSelect = (option) => {
    onSelect(option);
  };

  return (
    <div className={styles.popup}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul className={styles.optionsList}>
        {options
          .filter((option) =>
            option.label.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((option) => (
            <li
              key={option.value}
              className={styles.option}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default PopupSearchableList;
