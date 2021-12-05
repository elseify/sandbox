import styles from './common.module.scss';

export function CommonCard() {
  return (
    <div className={styles['card']}>
      <div className="card-info">
        <span className="info-title">Вышла 12 версия популярного фреймворка</span>
      </div>
      <div className="card-content">
        <span className="content-text">На днях у фреймворка Next.js вышла новая версия, из главного - поддержка React 18, поддержка middleware, более быстрый компилятор написанный на Rust.</span>
      </div>
    </div>
  );
}
