import Link from 'next/link';

import styles from './brand.module.scss';

function Brand() {
  return (
    <Link href="/">
      <a className={styles['brand']}>
        <span className="brand-icon">{'{y}'}</span>
      </a>
    </Link>
  );
}

export default Brand;
export {
  Brand,
};
