import React from 'react';
import styles from "./navbar.module.css"

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
         <div className={styles.sidebar}>
        <ul>
          <li><a href="#categoria1">Categoría 1</a></li>
          <li><a href="#categoria2">Categoría 2</a></li>
          <li><a href="#categoria3">Categoría 3</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;