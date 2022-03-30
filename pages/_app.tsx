import Head from 'next/head';
import type { AppProps } from 'next/app';

import { Provider } from 'react-redux';

import { AnimatePresence } from 'framer-motion';

import { Layout } from '@components/common/Layout';

import { initClient } from '@services/reduxStore';

import '@styles/app.scss';

export default function App(props: AppProps) {
  const {
    Component,
    pageProps,
    pageProps: {
      initialState,
    },
    router: {
      pathname,
    },
  } = props;

  return (
    <Provider store={initClient(initialState)}>
      <Head>
        <title>Sandbox</title>
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
