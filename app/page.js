import styles from "./page.module.css";
import { Song } from "./components/Song";
import { music } from "./assets/music";

export default function Home() {
  const songs = music;

  return (
    <main className={styles.main}>
      <div className={styles.musicList}>
        {
          songs.map(song => (<Song key={song.id} props={song}/>))
        }
      </div>
    </main>
  );
}
