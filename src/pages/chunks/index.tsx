import { Page } from '@components/page';
import { Pagination } from '@components/pagination';

import styles from './index.module.scss';

export default function Chunks() {
  return (
    <Page pageName={styles['page']} pageKey={'chunks'}>
      <div className="page-content"></div>
      <div className="page-control">
        <Pagination />
      </div>
    </Page>
  );
}
