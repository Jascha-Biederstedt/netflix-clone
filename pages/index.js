import Head from 'next/head';
import styles from '../styles/Home.module.css';

import NavBar from '../components/navbar/NavBar';
import Banner from '../components/banner/banner';
import SectionCards from '../components/sectionCards/SectionCards';
import { getVideos } from '../lib/videos';

export const getServerSideProps = async () => {
  const disneyVideos = await getVideos('disney trailer');
  const travelVideos = await getVideos('travel');
  const productivityVideos = await getVideos('productivity');

  return { props: { disneyVideos, travelVideos, productivityVideos } };
};

export default function Home({
  disneyVideos,
  travelVideos,
  productivityVideos,
}) {
  return (
    <div>
      <Head>
        <title>Netflix Clone</title>
        <meta name="description" content="Netflix clone to discover videos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar username="test@test.com" />

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
        <SectionCards title="Popular" videos={disneyVideos} size="small" />
      </div>
    </div>
  );
}
