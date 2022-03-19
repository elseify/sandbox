import Link from 'next/link';
import { useRouter } from 'next/router';

import { classNames as cn } from '@utils/classnames';

import styles from './sidebar.module.scss';

function Sidebar() {
  const router = useRouter();

  return (
    <div className={styles.block}>
      <Link href="/">
        <a className={cn(styles.item, { '_on': router.pathname === '/' })}>
          <span className={styles.itemIcon}>{'@'}</span>
          <span className={styles.itemText}>Свежее</span>
        </a>
      </Link>
      <Link href="/guides">
        <a className={cn(styles.item, { '_on': router.pathname.includes('/guides') })}>
          <span className={styles.itemIcon}>{'@'}</span>
          <span className={styles.itemText}>Руководства</span>
        </a>
      </Link>
      <Link href="/chunks">
        <a className={cn(styles.item, { '_on': router.pathname.includes('/chunks') })}>
          <span className={styles.itemIcon}>{'@'}</span>
          <span className={styles.itemText}>Компоненты</span>
        </a>
      </Link>
    </div>
  );
}

export {
  Sidebar,
};
