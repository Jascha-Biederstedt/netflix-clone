import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import classNames from 'classnames';

import styles from './Card.module.css';

const Card = ({
  imgUrl = '/static/error_movie_image.jpg',
  size = 'medium',
  id,
}) => {
  const classMap = {
    large: styles.lgItem,
    medium: styles.mdItem,
    small: styles.smItem,
  };

  const scale = id === 0 ? { scaleY: 1.1 } : { scale: 1.1 };

  return (
    <div className={styles.container}>
      <motion.div
        className={classNames(classMap[size], styles.imgMotionWrapper)}
        whileHover={{ ...scale }}
      >
        <Image
          src={imgUrl}
          alt="image"
          layout="fill"
          className={styles.cardImg}
        />
      </motion.div>
    </div>
  );
};

export default Card;
