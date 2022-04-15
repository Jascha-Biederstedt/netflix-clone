import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import classNames from 'classnames';

import styles from './Card.module.css';

const Card = ({
  imgUrl = '/static/error_movie_image.jpg',
  size = 'medium',
}) => {
  const classMap = {
    large: styles.lgItem,
    medium: styles.mdItem,
    small: styles.smItem,
  };

  return (
    <div className={styles.container}>
      <motion.div
        className={classNames(classMap[size], styles.imgMotionWrapper)}
        whileHover={{ scale: 1.2 }}
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
