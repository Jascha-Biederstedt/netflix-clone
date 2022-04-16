import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import styles from '../styles/Login.module.css';

const Login = () => {
  const handleLoginWithEmail = e => {
    e.preventDeafult();
    console.log('test');
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix Sign In</title>
      </Head>

      <header className={styles.header}>
        <div className={styles.headerWrapper}>
          <a className={styles.logoLink} href="/">
            <div className={styles.logoWrapper}>
              <Image
                src="/static/netflix.svg"
                alt="Netflix logo"
                width="128px"
                height="34px"
              />
            </div>
          </a>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.mainWrapper}>
          <h1 className={styles.signinHeader}>Sign In</h1>
          <input
            className={styles.emailInput}
            type="text"
            placeholder="Email address"
          />
          <p className={styles.userMsg}>Please enter a valid email address</p>
          <p className={styles.userNotice}>
            You'll receive a link for passwordless authentication.
          </p>
          <button className={styles.loginBtn} onClick={handleLoginWithEmail}>
            Sign In
          </button>
        </div>
      </main>
    </div>
  );
};

export default Login;
