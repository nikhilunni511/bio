import { useState } from "react";
import styles from "./PopupSearchableList.module.scss";

const PopupSearchableList = ({ options, onSelect, onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSelect = (option) => {
    onSelect(option);
  };

  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popup}>
        <div className={styles.header}>
          <h3>Social</h3>
          <span className={styles.close} onClick={onClose}>X</span>
        </div>
        <div>
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
      </div>
    </div>
  );
};

export default PopupSearchableList;
