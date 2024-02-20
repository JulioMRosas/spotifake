import React from "react";
import styles from "./footer.module.css";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <SkipPreviousIcon style={{ fontSize: "70px", marginTop: "-55px" }} />
      <PlayCircleIcon style={{ fontSize: "70px", marginTop: "-55px" }} />
      <SkipNextIcon style={{ fontSize: "70px", marginTop: "-55px" }} />
      <div className={styles.ContenedorPadredeFotoeInfo}>
        <div className={styles.divContenedordeAlbumFoto}>
          <div className={styles.divCuadradoBlanco}></div>
          <div className={styles.divEspaciado}></div>
        </div>
        <div className={styles.divNombreCancionArtistaCont}>
          <span className={styles.nombreCancion}>Nombre de la canción</span>
          <span className={styles.nombreArtista}>Nombre del artista</span>
        </div>
      </div>
      <div className={styles.progressBar}>
        <div className={styles.progressBarInterno}></div>
      </div>
    </div>
  );
};