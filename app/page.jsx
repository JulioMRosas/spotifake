"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import { Song } from "./components/Song";
import { music } from "./assets/music";

export default function Home() {
  const songs = music;
  const [currentSong, setCurrentSong] = useState(null);

  const playSong = (song) => {
    console.log("playSong: clicked song", song);
    setCurrentSong(song);
  };

  return (
    <main className={styles.main}>
      <div className={styles.musicList}>
        {
          songs.map(song => (
            <Song 
              key={song.id} 
              props={{...song, currentSong, setCurrentSong }}
              onClick={(event) => {
                playSong(song);
                event.stopPropagation();
              }}
            />  
          ))
        }
      </div>
    </main>
  );
}
