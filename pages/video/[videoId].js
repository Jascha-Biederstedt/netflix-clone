import React from 'react';
import { useRouter } from 'next/router';

import NavBar from '../../components/navbar/NavBar';

import styles from '../../styles/Video.module.css';

const Video = () => {
  const router = useRouter();

  console.log(router);

  return (
    <div>
      <NavBar />

      <div className={styles.container}>
        <iframe
          id="player"
          type="text/html"
          width="640"
          height="360"
          src="http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  );
};

export default Video;
