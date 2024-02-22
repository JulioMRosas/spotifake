"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./song.module.css";

export const Song = ({ props }) => {
  const { id, songName, artist, coverPath, filePath, currentSong, setCurrentSong } = props;
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    if (currentSong) {
      createAudio();
    } else {
      setAudio(null);
    }
  }, [currentSong, setCurrentSong]);
  
  const createAudio = () => {
    setAudio(new Audio(filePath));
  };

  const playPause = () => {
    console.log("Song: onClick triggered!");
    if (audio && currentSong === null) {
      console.log("both audio and currentSong are null");
      return
    }
    if (audio === null) {
      console.log("audio is null");
      return
    }
    if (currentSong === null) {
      console.log("currentSong is null");
      return
    }
    if (audio && currentSong && currentSong.id === id) {
      if (audio.pause() || audio.currentTime <= 0) {
        audio.play();
      } else {
        audio.pause();
      }
    } else {
      console.log("playPause: currentSong or audio is null");
    }
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
