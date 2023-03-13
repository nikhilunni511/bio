import PopupSearchableList from "components/PopupSearchableList/PopupSearchableList";
import { useState } from "react";
import styles from "./Tabs.module.scss";

const options = [
  { value: "instagram", label: "Instagram" },
  { value: "facebook", label: "Facebook" },
];

const AccordionTabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(null);
  const [openSocialMediaPopup, setSocialMediaModal] = useState(false);

  const handleClick = (index) => {
    setActiveTab(activeTab === index ? null : index);
  };

  return (
    <div className={styles.accordionTabs}>
      <div className={styles.tabs}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={[`${styles.tab} ${index === activeTab ? styles.active : ""}`]}
            onClick={() => handleClick(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className={styles.content}>
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={[`${styles.tabContent} ${index === activeTab ? styles.active : styles.inactive}`]}
          >
            <div className={styles.tabButtons}>
              <button className={styles.buttonAddLink} onClick={() => setSocialMediaModal(true)} >{"+ Add Link"}</button>
              {openSocialMediaPopup && <PopupSearchableList options={options} />}
            </div>
          </div>
        ))}
      </div>
    </div >
  );
};

export default AccordionTabs;
