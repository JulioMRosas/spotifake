import React from "react";
import styles from "./cancion.module.css";

export const Cancion = () => {
  return (
    <div className={styles.songContainer}>
      <div className={styles.albumphoto}>Foto album</div>
      <span className={styles.space}></span>
      <div className={styles.song}>Cancion</div>
    </div>
  );
};
