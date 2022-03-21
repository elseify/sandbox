import Link from 'next/link';

import styles from './more.module.scss';

export function More(props: PropsType) {
  const {
    linkTo,
  } = props;

  return (
    <Link href={linkTo}>
      <a className={styles.block}>
        <span className={styles.icon}>{'...'}</span>
      </a>
    </Link>
  );
}

type PropsType = {
  linkTo: string;
};
