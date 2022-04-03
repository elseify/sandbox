import Link from 'next/link';

import { classNames as cn } from '@utils/classnames';

import styles from './SectionInfo.module.scss';

export function SectionInfo(props: PropsType) {
  const {
    name,
    referTo,
  } = props;

  return (
    <div className={styles.block}>
      <div className={cn(styles.side, '_ls')}>
        <span className={styles.sideText}>{name}</span>
      </div>
      <div className={cn(styles.side, '_rs')}>
        <Link href={`/dashboard/${referTo}/add`}>
          <a className={styles.link}>
            <span className={styles.linkText}>Создать</span>
          </a>
        </Link>
        <Link href={`/dashboard/${referTo}`}>
          <a className={styles.link}>
            <span className={styles.linkText}>Показать все</span>
          </a>
        </Link>
      </div>
    </div>
  );
}

type PropsType = {
  name: string;
  referTo: string;
};
