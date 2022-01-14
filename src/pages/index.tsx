import { Page } from '@components/page';
import { More } from '@components/more';
import { GuideCard } from '@components/card/guide';
import { ChunkCard } from '@components/card/chunk';
import { Pagination } from '@components/pagination';

import styles from './index.module.scss';

export default function Home() {
  return (
    <Page pageName={styles['page']} pageKey="home">
      <div className="page-content">
        <div className="content-list">
          <ChunkCard />
          <ChunkCard />
          <ChunkCard />
        </div>
      </div>
      <div className="page-control">
        <Pagination />
      </div>
    </Page>
  );
}
