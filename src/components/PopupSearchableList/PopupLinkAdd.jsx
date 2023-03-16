import { useState } from "react";
import styles from "./PopupSearchableList.module.scss";

const PopupLinkAdd = ({ media, onClose, goBack }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popup}>
        <div className={styles.header}>
          <span className={styles.close} onClick={goBack}>{'<Back'}</span>
          <h3>{media}</h3>
          <span className={styles.close} onClick={onClose}>X</span>
        </div>
        <div>
          <div className={styles.inputContainer}>
            <label>{media}</label>
            <input className={styles.inputUrl} name={"url"} placeholder={`${media} url`}></input>
          </div>
          <button className={styles.saveLink}>{"Save"}</button>
        </div>
      </div>
    </div>
  );
};

export default PopupLinkAdd;
