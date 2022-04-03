import { Logo } from '@chunks/user/Logo';
import { Search } from '@chunks/user/Search';

import { classNames as cn } from '@utils/classnames';

import styles from './Header.module.scss';

export function Header() {
  return (
    <header className={styles.block}>
      <div className={cn(styles.layer, 'container')}>
        <div className={cn(styles.layerItem, '_fit')}>
          <Logo />
        </div>
        <div className={cn(styles.layerItem, '_fill')}>
          <Search />
        </div>
      </div>
    </header>
  );
}
