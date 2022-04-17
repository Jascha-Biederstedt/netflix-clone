import React from 'react';
import { useRouter } from 'next/router';

import NavBar from '../../components/navbar/NavBar';

import styles from '../../styles/Video.module.css';

const Video = () => {
  const router = useRouter();

  return (
    <div>
      <NavBar />

      <div className={styles.container}>
        <iframe
          className={styles.videoPlayer}
          id="player"
          type="text/html"
          width="800"
          height="360"
          src={`http://www.youtube.com/embed/${router.query.videoId}?enablejsapi=1&origin=http://example.com&controls=0&rel=1`}
          frameborder="0"
        ></iframe>
      </div>
    </div>
  );
};

export default Video;
