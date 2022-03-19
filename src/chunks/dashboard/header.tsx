import { Logo } from '@chunks/dashboard/Logo';
import { Logout } from '@chunks/dashboard/Logout';
import { classNames as cn } from '@utils/classnames';

import styles from './Header.module.scss';

function Header() {
  return (
    <div className={styles.block}>
      <div className={cn(styles.layer, 'container')}>
        <div className={styles.layerItem}>
          <Logo />
        </div>
        <div className={styles.layerItem}>
          <Logout />
        </div>
      </div>
    </div>
  );
}

export {
  Header,
};
