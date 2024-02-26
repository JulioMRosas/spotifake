"use client";

import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import { Song } from "./components/Song";
import { music } from "./assets/music";

export default function Home() {
  const songs = music;
  const [audio, setAudio] = useState(null);

  useEffect (() => {
    setAudio(new Audio("/CHON-Bubble-Dream.mp3"));
    return () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      };
    };
  }, []);

  const playPause = () => {
    if (audio.paused || audio.currentTime <= 0) audio.play();
    else audio.pause;
  };

  return (
    <main className={styles.main}>
      <div className={styles.musicList}>
        {
          songs.map(song => (
            <Song 
              key={song.id} 
              songProps={{ ...song, playPause }}
              onClick={playPause}
            />  
          ))
        }
      </div>
    </main>
  );
}
