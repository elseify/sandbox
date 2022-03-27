import Link from 'next/link';

import styles from './Logo.module.scss';

export function Logo() {
  return (
    <Link href="/">
      <a className={styles.block}>
        <span className={styles.icon}>Sandbox</span>
      </a>
    </Link>
  );
}
