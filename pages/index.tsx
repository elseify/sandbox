import { Page } from '@chunks/page';
import { More } from '@chunks/user/more';
import { GuideCard } from '@chunks/user/card/guide';
import { ChunkCard } from '@chunks/user/card/chunk';
import { Pagination } from '@chunks/pagination';

import styles from './index.module.scss';

export default function Home() {
  return (
    <Page className={styles['page']} pageKey="home">
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
