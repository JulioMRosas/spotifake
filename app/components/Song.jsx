import React from "react";
import Image from "next/image";
import styles from "./song.module.css";

export const Song = ({ props }) => {
  const { songName, artist, coverPath, filePath } = props;

  return (
    <div className={styles.songContainer}>
      <div className={styles.albumphoto}>
        <Image
          src={coverPath}
          width={100}
          height={100}
          alt="cover.jpeg"
          className={styles.image}
        />
      </div>
      <span className={styles.space}></span>
      <div className={styles.song}>{songName} - {artist}</div>
    </div>
  );
};
