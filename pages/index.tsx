import { Page } from '@common/Page';
import { Grid } from '@common/Grid';
import { ChunkCard } from '@user/card/ChunkCard';
import { GuideCard } from '@user/card/GuideCard';
import { Pagination } from '@common/Pagination';

import styles from './index.module.scss';

function Home() {
  return (
    <Page className={styles.block}>
      <div className={styles.content}>
        <Grid>
          <ChunkCard />
          <ChunkCard />
          <ChunkCard />
        </Grid>
      </div>
      <div className={styles.control}>
        <Pagination />
      </div>
    </Page>
  );
}

export default Home;
