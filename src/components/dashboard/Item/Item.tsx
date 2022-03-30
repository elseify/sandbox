import Link from 'next/link';

import { classNames as cn } from '@utils/classnames';

import styles from './Item.module.scss';

export function Item(props: PropsType) {
  const {
    name,
    referTo,
  } = props;

  return (
    <div className={styles.block}>
      <div className={cn(styles.side, '_fill')}>
        <span className={styles.sideText}>{name}</span>
      </div>
      <div className={styles.line} />
      <div className={styles.side}>
        <Link href={`/dashboard/${referTo}/change`}>
          <a className={styles.link}>
            <span className={styles.linkText}>Редактировать</span>
          </a>
        </Link>
        <div className={styles.link}>
          <span className={styles.linkText}>Удалить</span>
        </div>
      </div>
    </div>
  );
}

type PropsType = {
  name: string;
  referTo: string;
};
