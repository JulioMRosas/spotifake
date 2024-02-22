"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./song.module.css";

export const Song = ({ props }) => {
  const { id, songName, artist, coverPath, filePath, currentSong, setCurrentSong } = props;
  const [audio, setAudio] = useState(null);

  const createAudio = () => {
    if (currentSong) {
      setAudio(new Audio(currentSong.filePath));
    } else {
      setAudio(null); // Clear audio if no currentSong
    }
  };
  
  useEffect(() => {
    if (currentSong) {
      createAudio();
    }
  }, [currentSong]);

  const playPause = () => {
    console.log("playPause: currentSong", currentSong);
    console.log("playPause: audio", audio);
    if (audio.pause() || audio.currentTime <= 0) {
      audio.play()
    }; 

    if (currentSong && currentSong.id === id) {
      const newAudio = new Audio(filePath);
      setAudio(newAudio);
      newAudio.play();
    };
  };

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
        onClick={playPause}
      >
        {songName} - {artist}
      </div>
    </div>
  );
};
