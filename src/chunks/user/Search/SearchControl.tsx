import styles from './SearchControl.module.scss';

function SearchControl(props: PropsType) {
  const {
    query = [],
    value = '',
    setValue,
  } = props;

  return (
    <div className={styles.block}>
      <span
        className={styles.query}
      ></span>
      <input
        className={styles.input}
        value={value}
        placeholder="Поиск"
        onChange={({ target }) => {
          // Устанавливаем значение
          setValue(target.value);
        }}
      />
    </div>
  );
}

type PropsType = {
  query?: string[];
  value?: string;
  setValue: (value: string) => void;
};

export {
  SearchControl,
};
