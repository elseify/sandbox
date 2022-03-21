import Link from 'next/link';

import styles from './PaginationItem.module.scss';

export function PaginationItem({ icon }: PropsType) {
  return (
    <a className={styles.block}>
      <span className={styles.icon}>{icon}</span>
    </a>
  );
}

type PropsType = {
  icon: string;
};
