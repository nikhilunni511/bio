import PopupLinkAdd from "components/PopupSearchableList/PopupLinkAdd";
import PopupSearchableList from "components/PopupSearchableList/PopupSearchableList";
import { useState } from "react";
import styles from "./Tabs.module.scss";

const options = [
  { value: "instagram", label: "Instagram" },
  { value: "facebook", label: "Facebook" },
];

const AccordionTabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [openSocialMediaPopup, setSocialMediaModal] = useState(false);
  const [openSocialMediaAdd, setSocialMediaAddModal] = useState(false);
  const [media, setMedia] = useState('');

  const handleClick = (index) => {
    setActiveTab(activeTab === index ? null : index);
  };

  const showLinkAddModal = ({ label }) => {
    console.log("🚀 ~ file: Tabs.jsx:22 ~ showLinkAddModal ~ label:", label)
    setMedia(label);
    setSocialMediaModal(false);
    setSocialMediaAddModal(true);
  }

  const goBackFromLinkAddModal = () => {
    setSocialMediaAddModal(false);
    setSocialMediaModal(true);
  }

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
              {openSocialMediaPopup && <PopupSearchableList options={options} onSelect={showLinkAddModal} onClose={() => setSocialMediaModal(false)} />}
              {openSocialMediaAdd && <PopupLinkAdd goBack={goBackFromLinkAddModal} media={media} onClose={() => setSocialMediaAddModal(false)} />}
            </div>
          </div>
        ))}
      </div>
    </div >
  );
};

export default AccordionTabs;
