import LogoutIcon from 'components/Icons/Logout';
import { useState } from 'react';
import styles from './LogoutButton.module.scss';

const LogoutButton = () => {
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = () => {
    setIsLoggingOut(true);
    // Your logout logic goes here
  };

  return (
    <button className={styles.logoutButton} onClick={handleLogout}>
      <LogoutIcon />
    </button>
  );
}

export default LogoutButton;
