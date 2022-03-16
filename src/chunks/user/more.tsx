import Link from 'next/link';

import styles from './more.module.scss';

function More({ linkTo }: PropsType) {
  return (
    <Link href={linkTo}>
      <a className={styles['more']}>
        <span className="more-icon">{'...'}</span>
      </a>
    </Link>
  );
}

type PropsType = {
  linkTo: string;
};

export {
  More,
};
