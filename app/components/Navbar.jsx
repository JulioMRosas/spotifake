import React from "react";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.sidebar}>
        <ul>
          NavBar
          <li className={styles.Perfil}>Perfil de usuario</li>
          <li>Biblioteca</li>
          <li>Configuracion</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
