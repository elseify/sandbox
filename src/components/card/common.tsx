import styles from './common.module.scss';

export function CommonCard() {
  return (
    <div className={styles['card']}>
      <div className="card-info">
        <span className="info-title">Fleet — совершенно новый инструмент JetBrains</span>
      </div>
      <div className="card-content">
        <span className="content-text">29 ноября в бэта-тест вышел легковесный редактор нового поколения от JetBrains, редактор написан с нуля, включет в себя поддержку множество разных языков а так же имеет функционал для совмесной разработки.</span>
      </div>
    </div>
  );
}
