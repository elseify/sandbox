import {
  useAppSelector,
  useAppDispatch,
} from '@services/reduxHooks';

import { SearchControl } from './SearchControl';
import { SearchOverlay } from './SearchOverlay';

// Действия
import { setSearchValue } from './searchSlice';

import styles from './Search.module.scss';

export function Search() {
  const appSelector = useAppSelector((state) => state.search);
  const appDispatch = useAppDispatch();

  const {
    searchValue,
  } = appSelector;

  return (
    <div className={styles.block}>
      <SearchControl
        query={[]}
        value={searchValue}
        setValue={(value) => {
          appDispatch(setSearchValue(value));
        }}
      />
      <SearchOverlay />
    </div>
  );
}
