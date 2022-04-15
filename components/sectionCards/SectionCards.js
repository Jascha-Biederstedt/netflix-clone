import React from 'react';
import Card from '../card/Card';

import styles from './SectionCards.module.css';

const SectionCards = ({ title }) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardWrapper}>
        <Card id={0} imgUrl="/static/clifford.webp" size="large" />
        <Card imgUrl="/static/clifford.webp" size="large" />
        <Card imgUrl="/static/clifford.webp" size="large" />
        <Card size="large" />
        <Card imgUrl="/static/clifford.webp" size="large" />
        <Card imgUrl="/static/clifford.webp" size="large" />
        <Card imgUrl="/static/clifford.webp" size="large" />
        <Card imgUrl="/static/clifford.webp" size="large" />
        <Card imgUrl="/static/clifford.webp" size="large" />
        <Card imgUrl="/static/clifford.webp" size="large" />
        <Card imgUrl="/static/clifford.webp" size="large" />
        <Card imgUrl="/static/clifford.webp" size="large" />
        <Card imgUrl="/static/clifford.webp" size="large" />
        <Card imgUrl="/static/clifford.webp" size="large" />
      </div>
    </section>
  );
};

export default SectionCards;
