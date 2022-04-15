import React from 'react';
import Image from 'next/image';

const Card = ({ imgUrl, size }) => {
  return (
    <div>
      <Image src={imgUrl} alt="image" width="300px" height="300px" />
    </div>
  );
};

export default Card;
