import React from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames';

import NavBar from '../../components/navbar/NavBar';

import styles from '../../styles/Video.module.css';

const Video = () => {
  const router = useRouter();

  const video = {
    title: 'Hi cute dog',
    publishTime: '1990-01-01',
    description:
      'This is the description for the very cute dog Clifford lorem ipsumieuvriue iwueciquiuqbwibiwb weiucbiubcibqcibiqwbcibqwicbiqcb echbuwbczbwucbuzbwzcbzububoqbpbiqwpbuvuibwqekjnb viuiubibjbivbaiusghvisubhewijfThis is the description for the very cute dog Clifford lorem ipsumieuvriue iwueciquiuqbwibiwb weiucbiubcibqcibiqwbcibqwicbiqcb echbuwbczbwucbuzbwzcbzububoqbpbiqwpbuvuibwqekjnb viuiubibjbivbaiusghvisubhewijfThis is the description for the very cute dog Clifford lorem ipsumieuvriue iwueciquiuqbwibiwb weiucbiubcibqcibiqwbcibqwicbiqcb echbuwbczbwucbuzbwzcbzububoqbpbiqwpbuvuibwqekjnb viuiubibjbivbaiusghvisubhewijfThis is the description for the very cute dog Clifford lorem ipsumieuvriue iwueciquiuqbwibiwb weiucbiubcibqcibiqwbcibqwicbiqcb echbuwbczbwucbuzbwzcbzububoqbpbiqwpbuvuibwqekjnb viuiubibjbivbaiusghvisubhewijfThis is the description for the very cute dog Clifford lorem ipsumieuvriue iwueciquiuqbwibiwb weiucbiubcibqcibiqwbcibqwicbiqcb echbuwbczbwucbuzbwzcbzububoqbpbiqwpbuvuibwqekjnb viuiubibjbivbaiusghvisubhewijfThis is the description for the very cute dog Clifford lorem ipsumieuvriue iwueciquiuqbwibiwb weiucbiubcibqcibiqwbcibqwicbiqcb echbuwbczbwucbuzbwzcbzububoqbpbiqwpbuvuibwqekjnb viuiubibjbivbaiusghvisubhewijfThis is the description for the very cute dog Clifford lorem ipsumieuvriue iwueciquiuqbwibiwb weiucbiubcibqcibiqwbcibqwicbiqcb echbuwbczbwucbuzbwzcbzububoqbpbiqwpbuvuibwqekjnb viuiubibjbivbaiusghvisubhewijfThis is the description for the very cute dog Clifford lorem ipsumieuvriue iwueciquiuqbwibiwb weiucbiubcibqcibiqwbcibqwicbiqcb echbuwbczbwucbuzbwzcbzububoqbpbiqwpbuvuibwqekjnb viuiubibjbivbaiusghvisubhewijfThis is the description for the very cute dog Clifford lorem ipsumieuvriue iwueciquiuqbwibiwb weiucbiubcibqcibiqwbcibqwicbiqcb echbuwbczbwucbuzbwzcbzububoqbpbiqwpbuvuibwqekjnb viuiubibjbivbaiusghvisubhewijfThis is the description for the very cute dog Clifford lorem ipsumieuvriue iwueciquiuqbwibiwb weiucbiubcibqcibiqwbcibqwicbiqcb echbuwbczbwucbuzbwzcbzububoqbpbiqwpbuvuibwqekjnb viuiubibjbivbaiusghvisubhewijfThis is the description for the very cute dog Clifford lorem ipsumieuvriue iwueciquiuqbwibiwb weiucbiubcibqcibiqwbcibqwicbiqcb echbuwbczbwucbuzbwzcbzububoqbpbiqwpbuvuibwqekjnb viuiubibjbivbaiusghvisubhewijfThis is the description for the very cute dog Clifford lorem ipsumieuvriue iwueciquiuqbwibiwb weiucbiubcibqcibiqwbcibqwicbiqcb echbuwbczbwucbuzbwzcbzububoqbpbiqwpbuvuibwqekjnb viuiubibjbivbaiusghvisubhewijf',
    channelTitle: 'Paramount Picture',
    viewCount: 100000,
  };

  const { title, publishTime, description, channelTitle, viewCount } = video;

  return (
    <div>
      <NavBar />

      <div className={styles.container}>
        <iframe
          className={styles.videoPlayer}
          id="player"
          type="text/html"
          width="99%"
          height="360"
          src={`http://www.youtube.com/embed/${router.query.videoId}?enablejsapi=1&origin=http://example.com&controls=0&rel=1`}
          frameborder="0"
        ></iframe>

        <div className={styles.videoDescription}>
          <div className={styles.col1}>
            <p className={styles.publishTime}>{publishTime}</p>
            <p className={styles.title}>{title}</p>
            <p className={styles.description}>{description}</p>
          </div>
          <div className={styles.col2}>
            <p className={classNames(styles.subText, styles.subTextWrapper)}>
              <span className={styles.textColor}>Cast: </span>
              <span className={styles.channelTitle}>{channelTitle}</span>
            </p>
            <p className={styles.subText}>
              <span className={styles.textColor}>View Count: </span>
              <span className={styles.viewCount}>{viewCount}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
