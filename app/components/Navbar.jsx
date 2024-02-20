import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.sidebar}>
        <div>
          <div className={styles.Logo}><Image
          src="/SpaceMelody.svg"
          width={150}
          height={150}
          alt="logo image"
          className={styles.Imagen}
          /></div>
          <div className={styles.Titulo}>🌌Space Melody🪐</div>
          <div className={styles.Perfil}>⭐Perfil de usuario⭐</div>
          <div className={styles.Biblioteca}>🌠Biblioteca🌠</div>
          <div className={styles.Configuracion}>🌟Configuracion🌟</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
