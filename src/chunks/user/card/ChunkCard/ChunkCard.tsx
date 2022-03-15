import styles from './ChunkCard.module.scss';

function ChunkCard() {
  return (
    <div className={styles.block}>
      <div className={styles.info}>
        <span className={styles.infoTitle}>Меню навигации</span>
      </div>
    </div>
  );
}

export {
  ChunkCard,
};
