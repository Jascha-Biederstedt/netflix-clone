import Head from 'next/head';

import NavBar from '../components/navbar/NavBar';
import Banner from '../components/banner/banner';
import SectionCards from '../components/sectionCards/SectionCards';
import {
  getVideos,
  getPopularVideos,
  getWatchItAgainVideos,
} from '../lib/videos';
import redirectUser from '../utils/redirectUser';

import styles from '../styles/Home.module.css';

export async function getServerSideProps(context) {
  const { userId, token } = await redirectUser(context);

  const disneyVideos = await getVideos('disney trailer');
  const watchItAgainVideos = await getWatchItAgainVideos(userId, token);
  const travelVideos = await getVideos('travel');
  const productivityVideos = await getVideos('productivity');
  const popularVideos = await getPopularVideos();

  return {
    props: {
      disneyVideos,
      watchItAgainVideos,
      travelVideos,
      productivityVideos,
      popularVideos,
    },
  };
}

export default function Home({
  disneyVideos,
  watchItAgainVideos,
  travelVideos,
  productivityVideos,
  popularVideos,
}) {
  return (
    <div>
      <Head>
        <title>Netflix Clone</title>
        <meta name="description" content="Netflix clone to discover videos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
        <NavBar />

        <Banner
          videoId="4zH5iYM4wJo"
          title="Clifford the red dog"
          subTitle="a very cute dog"
          imgUrl="/static/clifford.webp"
        />

        <div className={styles.sectionWrapper}>
          <SectionCards title="Disney" videos={disneyVideos} size="large" />
          <SectionCards
            title="Watch it again"
            videos={watchItAgainVideos}
            size="small"
          />
          <SectionCards title="Travel" videos={travelVideos} size="small" />
          <SectionCards
            title="Productivity"
            videos={productivityVideos}
            size="medium"
          />
          <SectionCards title="Popular" videos={popularVideos} size="small" />
        </div>
      </div>
    </div>
  );
}
