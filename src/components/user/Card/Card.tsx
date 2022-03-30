import styles from './Card.module.scss';

export function Card(props: PropsType) {
  const {
    id,
  } = props;

  return (
    <div className={styles.block}>
      <div className={styles.info}>
        <span className={styles.infoTitle}>Название {id}</span>
      </div>
    </div>
  );
}

type PropsType = {
  id: number;
};
