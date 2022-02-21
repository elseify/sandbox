import styles from './guide.module.scss';

function GuideCard() {
  return (
    <div className={styles['guide-card']}>
      <div className="card-info">
        <span className="info-title">Гайд по CSS Flexbox</span>
      </div>
      <div className="card-content">
        <span className="content-text">Интерактивное руководство о CSS Flexbox, в этом гайде помимо основной теории вы так же сможете на интерактивных примерах понять как работают его свойства.</span>
      </div>
    </div>
  );
}

export default GuideCard;
export {
  GuideCard,
};
