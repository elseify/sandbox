import type { AppProps } from 'next/app';

import { AnimatePresence } from 'framer-motion';

import { Layout } from '@components/layout';

import '@styles/app.scss';

export default function App({ Component, pageProps, router }: AppProps) {
  const { pathname } = router;

  return (
    <Layout>
      <AnimatePresence initial={false} exitBeforeEnter>
        <Component
          key={pathname}
          {...pageProps}
        />
      </AnimatePresence>
    </Layout>
  );
}
