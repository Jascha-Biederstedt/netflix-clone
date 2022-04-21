import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import classNames from 'classnames';

import styles from './Card.module.css';

const Card = ({
  imgUrl = '/static/error_movie_image.jpg',
  size = 'medium',
  id,
  shouldScale = true,
}) => {
  const classMap = {
    large: styles.lgItem,
    medium: styles.mdItem,
    small: styles.smItem,
  };

  const [imgSrc, setImgSrc] = useState(imgUrl);

  const scale = id === 0 ? { scaleY: 1.1 } : { scale: 1.1 };

  const shouldHover = shouldScale && {
    whileHover: { ...scale },
  };

  const handleOnError = () => {
    setImgSrc('/static/error_movie_image.jpg');
  };

  return (
    <div className={styles.container}>
      <motion.div
        className={classNames(classMap[size], styles.imgMotionWrapper)}
        {...shouldHover}
      >
        <Image
          src={imgSrc}
          alt="image"
          layout="fill"
          onError={handleOnError}
          className={styles.cardImg}
        />
      </motion.div>
    </div>
  );
};

export default Card;
