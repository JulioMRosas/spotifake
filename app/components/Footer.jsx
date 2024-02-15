import React from 'react'
import styles from './footer.module.css'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <SkipPreviousIcon style={{ fontSize: "70px", marginTop: '-55px' }} />
      <PlayCircleIcon style={{ fontSize: "70px", marginTop: '-55px'}} />
      <SkipNextIcon style={{ fontSize: "70px", marginTop: '-55px' }} />
    </div>
  );
}
