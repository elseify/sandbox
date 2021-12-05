import { Page } from '@components/page';
import { CommonCard } from '@components/card/common';
import { Pagination } from '@components/pagination';

import styles from './index.module.scss';

export default function Home() {
  return (
    <Page pageName={styles['page']} pageKey={'home'}>
      <div className="page-content">
        <div className="content-list">
          <div className="list-item">
            <CommonCard />
          </div>
          <div className="list-item">
            <CommonCard />
          </div>
          <div className="list-item">
            <CommonCard />
          </div>
        </div>
      </div>
      <div className="page-control">
        <Pagination />
      </div>
    </Page>
  );
}
