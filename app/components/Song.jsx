import React from "react";
import Image from "next/image";
import styles from "./song.module.css";

export const Song = ({ songProps, onClick }) => {
  const { id, songName, artist, coverPath } = songProps

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
      <div 
        className={styles.song}
        onClick={onClick}
      >
        {songName} - {artist}
      </div>
    </div>
  );
};
