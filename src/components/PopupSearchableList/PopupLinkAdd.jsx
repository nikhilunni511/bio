import { useState } from "react";
import styles from "./PopupSearchableList.module.scss";

const PopupLinkAdd = ({ media }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className={styles.popup}>
      <h3>{media}</h3>
    </div>
  );
};

export default PopupLinkAdd;
