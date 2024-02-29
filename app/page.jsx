"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import { Song } from "./components/Song";
import { music } from "./assets/music";
import ReactAudioPlayer from "react-audio-player";

export default function Home() {
  const songs = music;
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const handlePlayPause = () => {
    if (currentSong.paused || currentSong.currentTime <= 0) currentSong.play();
    else currentSong.pause();
  };

  return (
    <main className={styles.main}>
      <div className={styles.musicList}>
        {
          songs.map((song, index) => (
            <Song 
              key={song.id} 
              songProps={{ ...song, index }}
              onClick={() => setCurrentSongIndex(index)}
            />  
          ))
        }
      </div>
      <ReactAudioPlayer
        src={songs[currentSongIndex].filePath}
        onPlay={handlePlayPause}
        onPause={handlePlayPause}
        controls
      />
    </main>
  );
}
