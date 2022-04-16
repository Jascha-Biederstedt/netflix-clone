import Head from 'next/head';

import NavBar from '../components/navbar/NavBar';
import Banner from '../components/banner/banner';
import SectionCards from '../components/sectionCards/SectionCards';
import { getVideos, getPopularVideos } from '../lib/videos';

import styles from '../styles/Home.module.css';

export const getServerSideProps = async () => {
  const disneyVideos = await getVideos('disney trailer');
  const travelVideos = await getVideos('travel');
  const productivityVideos = await getVideos('productivity');
  const popularVideos = await getPopularVideos();

  return {
    props: { disneyVideos, travelVideos, productivityVideos, popularVideos },
  };
};

export default function Home({
  disneyVideos,
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
          title="Clifford the red dog"
          subTitle="a very cute dog"
          imgUrl="/static/clifford.webp"
        />

        <div className={styles.sectionWrapper}>
          <SectionCards title="Disney" videos={disneyVideos} size="large" />
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
