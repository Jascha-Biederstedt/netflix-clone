import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import Card from '../card/Card';

import styles from './SectionCards.module.css';

const SectionCards = ({
  title,
  videos = [],
  size,
  shouldWrap = false,
  shouldScale,
}) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div
        className={classNames(styles.cardWrapper, shouldWrap && styles.wrap)}
      >
        {videos.map((video, idx) => {
          return (
            <Link href={`/video/${video.id}`} key={idx}>
              <a>
                <Card
                  id={idx}
                  imgUrl={video.imgUrl}
                  size={size}
                  shouldScale={shouldScale}
                />
              </a>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default SectionCards;
