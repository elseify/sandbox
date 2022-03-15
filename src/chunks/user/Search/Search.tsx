import { useState } from 'react';

import { SearchControl } from './SearchControl';
import { SearchOverlay } from './SearchOverlay';

import styles from './Search.module.scss';

function Search() {
  const [value, setValue] = useState('');

  return (
    <div className={styles.block}>
      <SearchControl
        value={value}
        setValue={setValue}
      />
      <SearchOverlay />
    </div>
  );
}

export default Search;
export {
  Search,
};
