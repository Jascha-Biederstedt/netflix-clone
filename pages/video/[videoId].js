import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames';

import NavBar from '../../components/navbar/NavBar';
import Like from '../../components/icons/Like';
import Dislike from '../../components/icons/Dislike';

import { getYouTubeVideoById } from '../../lib/videos';

import styles from '../../styles/Video.module.css';

export async function getStaticProps(context) {
  const videoId = context.params.videoId;
  const videoArray = await getYouTubeVideoById(videoId);

  return {
    props: {
      video: videoArray.length > 0 ? videoArray[0] : {},
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const listOfVideos = ['mYfJxlgR2jw', '4zH5iYM4wJo', 'KCPEHsAViiQ'];

  const paths = listOfVideos.map(videoId => ({
    params: { videoId },
  }));

  return { paths, fallback: 'blocking' };
}

const Video = ({ video }) => {
  const router = useRouter();

  const videoId = router.query.videoId;

  const [toggleLike, setToggleLike] = useState(false);
  const [toggleDislike, setToggleDislike] = useState(false);

  const {
    title,
    publishTime,
    description,
    channelTitle,
    statistics: { viewCount } = { viewCount: 0 },
  } = video;

  const getUserRating = async () => {
    const response = await fetch(`/api/stats?videoId=${videoId}`, {
      method: 'GET',
    });
    const data = await response.json();

    if (data.length > 0) {
      const favourited = data[0].favourited;
      if (favourited === 1) {
        setToggleLike(true);
      } else if (favourited === 0) {
        setToggleDislike(true);
      }
    }
  };

  const runRatingService = async liked => {
    return await fetch('/api/stats', {
      method: 'POST',
      body: JSON.stringify({
        videoId,
        favourited: liked ? 1 : 0,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  const handleToggleLike = () => {
    setToggleLike(true);
    setToggleDislike(false);

    runRatingService(true);
  };

  const handleToggleDislike = () => {
    setToggleLike(false);
    setToggleDislike(true);

    runRatingService(false);
  };

  useEffect(() => {
    getUserRating();
  }, []);

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
          src={`http://www.youtube.com/embed/${videoId}?enablejsapi=1&origin=http://example.com&controls=0&rel=1`}
          frameBorder="0"
        ></iframe>

        <div className={styles.likeDislikeBtnWrapper}>
          <div className={styles.likeBtnWrapper}>
            <button onClick={handleToggleLike}>
              <div className={styles.btnWrapper}>
                <Like selected={toggleLike} />
              </div>
            </button>
          </div>
          <button onClick={handleToggleDislike}>
            <div className={styles.btnWrapper}>
              <Dislike selected={toggleDislike} />
            </div>
          </button>
        </div>

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
