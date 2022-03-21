import styles from './ChunkCard.module.scss';

export function ChunkCard(props: PropsType) {
  const {
    id,
  } = props;

  return (
    <div className={styles.block}>
      <div className={styles.info}>
        <span className={styles.infoTitle}>Меню навигации {id}</span>
      </div>
    </div>
  );
}

type PropsType = {
  id: number;
};
