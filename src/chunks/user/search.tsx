import React from 'react';
import { useState } from 'react';

import styles from './search.module.scss';

function Search() {
  const [search, setSearch] = useState('');

  return (
    <div className={styles['search']}>
      <div className="search-control">
        <input
          className="control-input"
          type="search"
          name="search"
          value={search}
          placeholder="Поиск"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            // Получаем значение поля
            const value = event.target.value;

            // Записываем значение поля
            setSearch(value);
          }}
        />
      </div>
    </div>
  );
}

export default Search;
export {
  Search,
};
