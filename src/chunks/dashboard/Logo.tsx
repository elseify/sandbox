import Link from 'next/link';

import styles from './Logo.module.scss';

export function Logo() {
  return (
    <Link href="/dashboard">
      <a className={styles.block}>
        <span className={styles.text}>Dashboard</span>
      </a>
    </Link>
  );
}
