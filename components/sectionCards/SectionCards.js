import React from 'react';
import Card from '../card/Card';

const SectionCards = () => {
  return (
    <section>
      <h2>Disney</h2>
      <div>
        <Card imgUrl="/static/clifford.webp" size="large" />
      </div>
    </section>
  );
};

export default SectionCards;
