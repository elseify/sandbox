import {
  useAppSelector,
  useAppDispatch,
} from '@services/reduxHooks';
import { setSearchValue } from '@services/slices/sliceSearch';

import { SearchControl } from './SearchControl';
import { SearchOverlay } from './SearchOverlay';

import styles from './Search.module.scss';

function Search() {
  const appSelector = useAppSelector((state) => state.search);
  const appDispatch = useAppDispatch();

  const {
    searchValue,
  } = appSelector;

  return (
    <div className={styles.block}>
      <SearchControl
        value={searchValue}
        setValue={(value) => {
          // Устанавливаем состояние поиска
          appDispatch(setSearchValue(value));
        }}
      />
      <SearchOverlay />
    </div>
  );
}

export {
  Search,
};
