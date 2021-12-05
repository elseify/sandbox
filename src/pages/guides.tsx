import { Page } from '@components/page';
import { Pagination } from '@components/pagination';

import styles from './guides.module.scss';

export default function Guides() {
  return (
    <Page pageName={styles['page']} pageKey={'guides'}>
      <div className="page-content"></div>
      <div className="page-control">
        <Pagination />
      </div>
    </Page>
  );
}
