import { PaginationItem } from './PaginationItem';

import styles from './Pagination.module.scss';

function Pagination() {
  return (
    <div className={styles.block}>
      <div className={styles.list}>
        <PaginationItem icon="<-" />
        <PaginationItem icon="->" />
      </div>
    </div>
  );
}

export {
  Pagination,
};
