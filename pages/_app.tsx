import Head from 'next/head';
import type { AppProps } from 'next/app';

import { Provider } from 'react-redux';

import { AnimatePresence } from 'framer-motion';

import { Layout } from '@chunks/common/Layout';

import { initStore } from '@services/reduxStore';

import '@styles/app.scss';

export default function App({ Component, pageProps, router }: AppProps) {
  const { initialState } = pageProps;
  const { pathname } = router;

  return (
    <Provider store={initStore(initialState)}>
      <Head>
        <title>Typeify</title>
      </Head>
      <Layout type={getLayoutType(pathname)}>
        <AnimatePresence
          initial={false}
          exitBeforeEnter
        >
          <Component
            {...pageProps}
            key={pathname}
          />
        </AnimatePresence>
      </Layout>
    </Provider>
  );
}

function getLayoutType(pathname: string) {
  if (pathname.includes('/login')) {
    return 'none';
  }

  if (pathname.includes('/dashboard')) {
    return 'dashboard';
  }

  return 'user';
}
