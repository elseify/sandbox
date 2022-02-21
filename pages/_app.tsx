import Head from 'next/head';
import type { AppProps } from 'next/app';

import { AnimatePresence } from 'framer-motion';

import { Layout } from '@chunks/layout';

import '@styles/app.scss';

export default function App({ Component, pageProps, router }: AppProps) {
  const { pathname } = router;

  return (
    <>
      <Head>
        <title>Typeify</title>
      </Head>
      <Layout type={getLayoutType(pathname)}>
        <AnimatePresence
          initial={false}
          exitBeforeEnter
        >
          <Component
            key={pathname}
            {...pageProps}
          />
        </AnimatePresence>
      </Layout>
    </>
  );
}

function getLayoutType(pathname: string) {
  if (pathname.includes('/signin')) {
    return 'none';
  }

  if (pathname.includes('/dashboard')) {
    return 'dashboard';
  }

  return 'user';
}
