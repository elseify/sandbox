import { Page } from '@components/page';
import { Pagination } from '@components/pagination';

import styles from './news.module.scss';

export default function News() {
  return (
    <Page pageName={styles['page']} pageKey={'news'}>
      <div className="page-content"></div>
      <div className="page-control">
        <Pagination />
      </div>
    </Page>
  );
}
