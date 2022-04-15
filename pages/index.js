import Head from 'next/head';
import styles from '../styles/Home.module.css';

import NavBar from '../components/navbar/NavBar';
import Banner from '../components/banner/banner';
import SectionCards from '../components/sectionCards/SectionCards';

export default function Home() {
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
        <SectionCards title="Disney" />
      </div>
    </div>
  );
}
