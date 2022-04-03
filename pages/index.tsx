import type { GetServerSideProps } from 'next';

import { prisma } from '@lib/prisma';
import type { Chunk } from '@prisma/client';

import { Page } from '@chunks/common/Page';
import { Grid } from '@chunks/common/Grid';
import { Card } from '@chunks/user/Card';

import { initServer } from '@services/reduxStore';
import { setSearchValue } from '@services/slices/sliceSearch';

import styles from './index.module.scss';

export default function Home(props: PropsType) {
  const {
    chunks,
  } = props;

  return (
    <Page className={styles.block}>
      <div className={styles.info}></div>
      <div className={styles.content}>
        <Grid>
          {chunks.map((chunk) => <Card id={chunk.id} key={chunk.id} />)}
        </Grid>
      </div>
      <div className={styles.control}></div>
    </Page>
  );
}

export const getServerSideProps: GetServerSideProps<PropsType> = async (context) => {
  const {
    query,
    req,
    res,
  } = context;

  const chunks = await prisma.chunk.findMany();

  const initialStore = initServer(req, res);

  let searchValue = query.search;

  if (searchValue) {
    searchValue = String(searchValue);
    searchValue = decodeURIComponent(searchValue);

    initialStore.dispatch(setSearchValue(searchValue));
  } else {
    initialStore.dispatch(setSearchValue(''));
  }

  const initialState = initialStore.getState();

  return {
    props: {
      chunks: JSON.parse(JSON.stringify(chunks)),
      // initialState,
    },
  };
}

type PropsType = {
  chunks: Chunk[];
};
