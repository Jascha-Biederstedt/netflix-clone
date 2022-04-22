import React from 'react';
import Head from 'next/head';

import NavBar from '../../components/navbar/NavBar';
import SectionCards from '../../components/sectionCards/SectionCards';
import redirectUser from '../../utils/redirectUser';
import { getMyList } from '../../lib/videos';

import styles from '../../styles/MyList.module.css';

export async function getServerSideProps(context) {
  const { userId, token } = await redirectUser(context);
  const videos = await getMyList(userId, token);

  return {
    props: {
      myListVideos: videos,
    },
  };
}

const MyList = ({ myListVideos }) => {
  return (
    <div>
      <Head>
        <title>My List</title>
      </Head>

      <main className={styles.main}>
        <NavBar />

        <div className={styles.sectionWrapper}>
          <SectionCards
            title="My List"
            videos={myListVideos}
            size="small"
            shouldWrap
            shouldScale={false}
          />
        </div>
      </main>
    </div>
  );
};

export default MyList;
