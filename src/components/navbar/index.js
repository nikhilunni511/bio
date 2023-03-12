import Link from 'next/link';
import { useState } from 'react';
import styles from './Navbar.module.scss'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className={styles.navbar}>
      
    </nav>
  );
};

export default Navbar;
