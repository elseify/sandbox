import { Brand } from '@chunks/brand';
import { Search } from '@chunks/user/search';

import styles from './header.module.scss';

function Header() {
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

export default Header;
export {
  Header,
};
