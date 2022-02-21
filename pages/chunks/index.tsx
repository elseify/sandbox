import { Page } from '@chunks/page';
import { Pagination } from '@chunks/pagination';

import styles from './index.module.scss';

export default function Chunks() {
  return (
    <Page className={styles['page']} pageKey="chunks">
      <div className="page-content"></div>
      <div className="page-control">
        <Pagination />
      </div>
    </Page>
  );
}
