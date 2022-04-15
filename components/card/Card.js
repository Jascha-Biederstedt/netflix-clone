import React from 'react';
import Image from 'next/image';

import styles from './Card.module.css';

const Card = ({ imgUrl, size }) => {
  const classMap = {
    large: styles.lgItem,
    medium: styles.mdItem,
    small: styles.smItem,
  };

  return (
    <div className={styles.container}>
      <div className={classMap[size]}>
        <Image
          src={imgUrl}
          alt="image"
          layout="fill"
          className={styles.cardImg}
        />
      </div>
    </div>
  );
};

export default Card;
