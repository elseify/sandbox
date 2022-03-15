import Link from 'next/link';

import styles from './Logo.module.scss';

function Logo() {
  return (
    <Link href="/dashboard">
      <a className={styles.block}>
        <span className={styles.text}>Dashboard</span>
      </a>
    </Link>
  );
}

export {
  Logo,
};
