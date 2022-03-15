import styles from './Logout.module.scss';

function Logout() {
  return (
    <div className={styles.block}>
      <span className={styles.icon}>{'<-]'}</span>
    </div>
  );
}

export {
  Logout,
};
