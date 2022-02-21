import Link from 'next/link';
import { useRouter } from 'next/router';

import cn from '@utils/classnames';

import styles from './sidebar.module.scss';

function Sidebar() {
  const router = useRouter();

  return (
    <div className={styles['sidebar']}>
      <div className="sidebar-list">
        <Link href="/">
          <a className={cn('list-item', { '_on': router.pathname === '/' })}>
            <span className="item-icon">{'@'}</span>
            <span className="item-text">Свежее</span>
          </a>
        </Link>
        <Link href="/guides">
          <a className={cn('list-item', { '_on': router.pathname.includes('/guides') })}>
            <span className="item-icon">{'@'}</span>
            <span className="item-text">Руководства</span>
          </a>
        </Link>
        <Link href="/chunks">
          <a className={cn('list-item', { '_on': router.pathname.includes('/chunks') })}>
            <span className="item-icon">{'@'}</span>
            <span className="item-text">Компоненты</span>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
export {
  Sidebar,
};
