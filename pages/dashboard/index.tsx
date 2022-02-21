import { Page } from '@chunks/page';

import styles from './index.module.scss';

export default function Dashboard() {
  return (
    <Page className={styles['page']} pageKey="dashboard">
      <div className="page-item"></div>
      <div className="page-item"></div>
    </Page>
  );
}
