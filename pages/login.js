import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { magic } from '../lib/magic-client';

import styles from '../styles/Login.module.css';

const Login = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [userMsg, setUserMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleOnChangeEmail = e => {
    setUserMsg('');
    setEmail(e.target.value);
  };

  const handleLoginWithEmail = async e => {
    e.preventDefault();

    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email.match(validRegex)) {
      try {
        setIsLoading(true);

        const didToken = await magic.auth.loginWithMagicLink({
          email,
        });

        if (didToken) {
          const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${didToken}`,
              'Content-Type': 'application/json',
            },
          });

          const loggedInResponse = await response.json();

          if (loggedInResponse.done) {
            router.push('/');
          } else {
            console.error('Something went wrong logging in');
            setIsLoading(false);
          }
        }
      } catch (error) {
        console.error('Something went wrong logging in', error);
        setIsLoading(false);
      }
    } else {
      setUserMsg('Please enter a valid email address');
    }
  };

  const handleOnComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    router.events.on('routeChangeComplete', handleOnComplete);
    router.events.on('routeChangeError', handleOnComplete);

    return () => {
      router.events.off('routeChangeComplete', handleOnComplete);
      router.events.off('routeChangeError', handleOnComplete);
    };
  }, [router]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix Sign In</title>
      </Head>

      <header className={styles.header}>
        <div className={styles.headerWrapper}>
          <Link href="/">
            <a className={styles.logoLink}>
              <div className={styles.logoWrapper}>
                <Image
                  src="/static/netflix.svg"
                  alt="Netflix logo"
                  width="128px"
                  height="34px"
                />
              </div>
            </a>
          </Link>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.mainWrapper}>
          <h1 className={styles.signinHeader}>Sign In</h1>
          <input
            className={styles.emailInput}
            type="email"
            placeholder="Email address"
            onChange={handleOnChangeEmail}
          />
          <p className={styles.userMsg}>{userMsg}</p>
          <p className={styles.userNotice}>
            You will receive a link for passwordless login.
          </p>
          <button className={styles.loginBtn} onClick={handleLoginWithEmail}>
            {isLoading ? 'Loading...' : 'Sign In'}
          </button>
        </div>
      </main>
    </div>
  );
};

export default Login;
