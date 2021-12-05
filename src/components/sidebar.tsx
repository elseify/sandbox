import Link from 'next/link';
import { useRouter } from 'next/router';

import cn from 'classnames';

import styles from './sidebar.module.scss';

export function Sidebar() {
  const router = useRouter();

  return (
    <div className={styles['sidebar']}>
      <div className="sidebar-list">
        <Link href="/">
          <a className={cn('list-item', { '_on': router.pathname == '/' })}>
            <span className="item-icon">{'@'}</span>
            <span className="item-text">Свежее</span>
          </a>
        </Link>
        <Link href="/news">
          <a className={cn('list-item', { '_on': router.pathname.includes('/news') })}>
            <span className="item-icon">{'@'}</span>
            <span className="item-text">Новости</span>
          </a>
        </Link>
        <Link href="/guides">
          <a className={cn('list-item', { '_on': router.pathname.includes('/guides') })}>
            <span className="item-icon">{'@'}</span>
            <span className="item-text">Руководства</span>
          </a>
        </Link>
      </div>
    </div>
  );
}
