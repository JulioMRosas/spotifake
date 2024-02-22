"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./song.module.css";

export const Song = ({ props }) => {
  const { id, songName, artist, coverPath, filePath, currentSong } = props;
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    console.log("useEffect: currentSong", currentSong);
    const createAudio = () => { 
      if (currentSong && currentSong.id === id) {
        setAudio(new Audio(filePath));
      }
    };
    createAudio();
    if (currentSong && currentSong.id === id) {
      props.setCurrentSong(currentSong);
    };
    return () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      };
    };
  }, [currentSong, filePath, props.currentSong]);

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
