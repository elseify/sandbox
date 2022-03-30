import { PaginationItem } from './PaginationItem';

import styles from './Pagination.module.scss';

export function Pagination() {
  return (
    <div className={styles.block}>
      <div className={styles.list}>
        <PaginationItem icon="<-" />
        <PaginationItem icon="->" />
      </div>
    </div>
  );
}
