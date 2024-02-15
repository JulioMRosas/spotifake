import Image from "next/image";
import styles from "./page.module.css";
import { Cancion } from "./components/Cancion";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.musicList}><Cancion/></div>
    </main>
  );
}
