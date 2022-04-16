import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { magic } from '../lib/magic-client';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  const handleCheckLogin = async () => {
    const isLoggedIn = await magic.user.isLoggedIn();

    if (isLoggedIn) {
      router.push('/');
    } else {
      router.push('/login');
    }
  };

  const handleOnComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    handleCheckLogin();
  }, []);

  useEffect(() => {
    router.events.on('routeChangeComplete', handleOnComplete);
    router.events.on('routeChangeError', handleOnComplete);

    return () => {
      router.events.off('routeChangeComplete', handleOnComplete);
      router.events.off('routeChangeError', handleOnComplete);
    };
  }, [router]);

  return isLoading ? <div>Loading...</div> : <Component {...pageProps} />;
}

export default MyApp;
