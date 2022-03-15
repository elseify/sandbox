import cn from '@utils/classnames';

import { Logo } from '@user/Logo';
import { Search } from '@user/Search';

import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.block}>
      <div className={cn(styles.layer, 'container')}>
        <div className={styles.layerItem} data-item="logo">
          <Logo />
        </div>
        <div className={styles.layerItem} data-item="search">
          <Search />
        </div>
      </div>
    </header>
  );
}

export {
  Header,
};
