import styles from './chunk.module.scss';

export function ChunkCard() {
  return (
    <div className={styles['chunk-card']}>
      <div className="card-info">
        <span className="info-title">Меню навигации</span>
      </div>
    </div>
  );
}
