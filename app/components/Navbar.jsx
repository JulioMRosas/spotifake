import React from 'react';
import styles from "./navbar.module.css"

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
         <div className={styles.sidebar}>
        <ul>
          <li>Categoría 1</li>
          <li>Categoría 2</li>
          <li>Categoría 3</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;