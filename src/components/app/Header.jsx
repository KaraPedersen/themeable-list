import React from 'react';
import { useHeaders } from '../../state/CharacterProvider';
import styles from './Header.css';


const Header = () => {
  const { handleHeaderChange } = useHeaders();

  return (
    <>
      <header className={styles.Header}>
        <label>Dark theme</label>
        <input className={styles.dark}
          type="radio"
          name="header" 
          value="dark" 
          onChange={handleHeaderChange} />
        <label>Light theme</label>
        <input className="light"
          type="radio" 
          name="header" 
          value="light" 
          onChange={handleHeaderChange} />
      </header>
    </>  
  );
};

export default Header;
