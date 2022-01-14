import { Brand } from '@components/brand';
import { Search } from '@components/search';

import styles from './header.module.scss';

export function Header() {
  return (
    <header className={styles['header']}>
      <div className="header-layer container">
        <div className="layer-item" data-item="brand">
          <Brand />
        </div>
        <div className="layer-item" data-item="search">
          <Search />
        </div>
      </div>
    </header>
  );
}
