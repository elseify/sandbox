import styles from './SearchControl.module.scss';

export function SearchControl(props: PropsType) {
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
        onChange={(event) => {
          const {
            target,
            target: {
              value,
            },
          } = event;

          setValue(value);
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
