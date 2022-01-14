import styles from './page.module.scss';

export function Guide() {
  return (
    <div className={styles['page']} data-page="guide">
      <div className="page-info">
        <h1 className="info-title">Гайд по CSS Flexbox</h1>
        <p className="info-text">Интерактивное руководство о CSS Flexbox, в этом гайде помимо основной теории вы так же сможете на интерактивных примерах понять как работают его свойства.</p>
      </div>
      <div className="page-content">
        <div className="content-item"></div>
        <div className="content-item"></div>
      </div>
    </div>
  );
}
